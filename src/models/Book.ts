class Book {
    id_book: number;
    id_user: number;
    title: string;
    type: string;
    author: string;
    price: number;
    photo: string;

    constructor(id_book: number = 0, id_user: number = 0, title: string, type: string, author: string, price: number, photo: string) {
        this.id_book = id_book;
        this.id_user = id_user;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
}

export default Book;

