import { IWishList } from "./wishList.interface";
import { WishList } from "./wishList.model";

;

const createWishList = async (payload: IWishList): Promise<IWishList> => {
  const WishListPayload: IWishList = { ...payload };
  const result = await WishList.create(WishListPayload);
  return result;
};

const getAllWishLists = async (email: string) => {
  const result = await WishList.find({ email: email }).populate('book');
  return result;
};


const deleteWishList = async (id: string) => {
  const result = await WishList.findByIdAndDelete(id);
  return result;
};

const updateWishList = async (
  id: string,
  payload: Partial<IWishList>
): Promise<IWishList | null> => {
  const result = await WishList.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const WishListService = {
  createWishList,
  deleteWishList,
  getAllWishLists,
  updateWishList,
};
