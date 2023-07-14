import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './books.interface';

const bookSchema = new Schema<IBook>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    bookDescription: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bookImage: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.pre('save', async function (next) {
  const existingBook = await Book.findOne({ title: this.title });
  if (existingBook) {
    throw new Error('This book is already Exist!!!');
  }
  next();
});

export const Book = model<IBook, BookModel>('book', bookSchema);
