import {createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import { Book, CartItem, Price } from '../types/book';
import { RootState } from '.';

export type InitialState = {
    items: CartItem[],
    deliveryFee: number;
    freeDeliveryFrom: number;
};

const initialState:InitialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200,
}

type AddCartItemPayloadType = {product: Book, price: Price};
type ChangeQuantityType = {productId: string, amount: 1|-1, price: Price};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<AddCartItemPayloadType>)=>{
           const {product, price} = action.payload;
           const isItemExists = state.items.find((item)=> item.product._id === product._id && item.price.type === price.type);
           if(!isItemExists){
            state.items.push({price, quantity: 1, product }); 
           }
           else{
            const idx = state.items.findIndex((item)=> item.product._id === product._id && item.price.type === price.type);
            const oldItem  = state.items[idx];
            state.items.splice(idx, 1, {...oldItem, quantity: oldItem.quantity +1});
           }
           
        },
        changeQuantity: (state,action: PayloadAction<ChangeQuantityType>)=>{
          const {productId, price, amount} = action.payload;
          const idx = state.items.findIndex((item)=> item.product._id === productId && item.price.type === price.type);
          const oldItem  = state.items[idx];
          const oldQuantity = oldItem.quantity;
          const newQuantity = oldQuantity + amount;

          if(newQuantity <= 0){
            state.items.splice(idx, 1);
          }else{
            state.items.splice(idx, 1, {...oldItem, quantity: newQuantity});
          }
        },
        clearCart: (state)=>{
          state.items = [];
        }
    }

});

export const {reducer: cartReducer, actions} = cartSlice;

export const {addCartItem, changeQuantity, clearCart} = actions;

export const selectItems = (state: RootState)=> state.cart.items;

export const selectSubTotal = (state:RootState): number => state.cart.items.reduce((acc, current)=> {
    acc = acc + current.price.price * current.quantity;
    return acc;
} , 0)

const cartItems = (state: RootState)=> state.cart;

export const selectDeliveryPrice = createSelector(cartItems, selectSubTotal, 
    (cart, subTotal)=> subTotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee);

export const selectTotalPrice = createSelector( selectSubTotal, selectDeliveryPrice, 
        ( subTotal, deliveryPrice)=> subTotal + deliveryPrice);