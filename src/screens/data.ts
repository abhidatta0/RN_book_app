import { Book, BookFormatByBinding } from "../types/book";

export const books: Book[] = [
    {
        _id: '1',
        title:"Neuromancer",
        description:"Hotwired to the leading edges of art and technology, Neuromancer is a cyberpunk, science fiction masterpiece—a classic that ranks with 1984 and Brave New World as one of the twentieth century’s most potent visions of the future.",
        prices: [
            {
                type: BookFormatByBinding.ebook,
                price: 30,
            },
            {
                type: BookFormatByBinding.paperback,
                price: 40,
            },
            {
                type: BookFormatByBinding.hardcover,
                price: 50,
            }
        ],
        authors: ['William Gibson'],
        images: [
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg"
        ]
    },
    {
        _id: '2',
        title:"Glut: Mastering Information through the Ages",
        description:`What do primordial bacteria, medieval alchemists, and the World Wide Web have to do with each other? This fascinating exploration of how information systems emerge takes readers on a provocative journey through the history of the information age. \n\nToday's "information explosion" may seem like an acutely modern phenomenon, but we are not the first generation--nor even the first species--to wrestle with the problem of information overload. Long before the advent of computers, human beings were collecting, storing, and organizing information: from Ice Age taxonomies to Sumerian archives, Greek libraries to Dark Age monasteries.`,
        prices: [
            {
                type: BookFormatByBinding.ebook,
                price: 70,
            },
        ],
        authors: ['Alex Wright'],
        images: [
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347720473i/1155302.jpg"
        ]
    },
    {
        _id: '3',
        title:"The Social Life of Information",
        description:`For years pundits have predicted that information technology will obliterate everything, from supermarkets to business organizations to social life itself, but beaten down by info-glut, exasperated by computer crashes, and daunted by the dot com crash, individual users find it hard to get a fix on the true potential of the digital revolution.`,
        prices: [
            {
                type: BookFormatByBinding.ebook,
                price: 40,
            },
            {
                type: BookFormatByBinding.hardcover,
                price: 60,
            },
        ],
        authors: ["John Seely Brown", "Paul Duguid"],
        images: [
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631261934i/89712.jpg"
        ]
    },
    {
        _id: '4',
        title:"Too Big to Know: Rethinking Knowledge Now That the Facts Aren't the Facts, Experts Are Everywhere, and the Smartest Person in the Room Is the Room",
        description:"We used to know how to know. We got our answers from books or experts. We'd nail down the facts and move on. But in the Internet age, knowledge has moved onto networks. There's more knowledge than ever, of course, but it's different. Topics have no boundaries, and nobody agrees on anything.\n\nThis groundbreaking book shakes the foundations of our concept of knowledge, from the role of facts to the value of books and the authority of experts, providing a compelling vision of the future of knowledge in a connected world.",
        prices:[
            {
                type: BookFormatByBinding.hardcover,
                price: 50,
            }
        ],
        authors: ["David Weinberger"],
        images: [
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1323615582i/11581907.jpg"
        ]
    },
    {
        _id: '5',
        title:"A Brief History of Time",
        description:"A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?",
        prices:[
            {
                type: BookFormatByBinding.paperback,
                price: 15,
            },
            {
                type: BookFormatByBinding.hardcover,
                price: 20,
            },
            {
                type: BookFormatByBinding.ebook,
                price: 17,
            }
        ],
        authors: ["Stephen Hawking"],
        images: [
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg"
        ]
    }
]