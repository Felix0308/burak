import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";

/** Member **/
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"), // kirib kelayotgan image "uploader" ichidagi "members" folderiga "memberImage" nomi ostida faqat bitta user image yuklash
  memberController.updateMember
);
router.get("/member/top-users", memberController.getTopUsers);

/**Product **/
router.get("/product/all", productController.getProducts);
router.get(
  "/product/:id",
  memberController.retrieveAuth,  // aynan qaysi product ga borishimiz kerakligini :id (param) orqali belgilaymiz, login bo'lgan va bo'lmagan userlar kira oladi, retrieveAuth => user kirganda viewlar sosnini 1 ga oshirib beradi va qayta kirganda hadeb 1 ga oshiravermaydi
  productController.getProduct
); 

/** Order **/

export default router;
