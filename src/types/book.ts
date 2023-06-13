export type Book = {
    _id: string,
    title: string
    description: string
    prices: Price[]
    authors: string[]
    images: string[]
}

type Price  = {
    type: BookFormatByBinding,
    price: number
}

export enum BookFormatByBinding  {
    paperback = 'paperback',
    hardcover = 'hardcover',
    ebook = 'ebook',
}