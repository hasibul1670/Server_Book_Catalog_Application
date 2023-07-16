import express from 'express';
import { WishListController } from './wishList.controller';

const router = express.Router();

router.post(
  '/create-wishlist',
  WishListController.createWishList
);
router.get('/:email', WishListController.getAllWishLists);
router.delete('/:id', WishListController.deleteWishList);
router.patch('/:id', WishListController.updateWishList);

export const WishListRoutes = router;
