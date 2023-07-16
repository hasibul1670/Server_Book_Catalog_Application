/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, Types } from 'mongoose';
import { IBook } from '../book/books.interface';

export type IWishListType = {
  finishedReading: boolean;
};
export type IWishList = {
  wishList: IWishListType;
  email: string;
  book: Types.ObjectId | IBook;
};

export type WishModel = Model<IWishList>;
