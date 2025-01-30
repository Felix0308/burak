import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

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
  uploader("members").single("memberImage"),  // kirib kelayotgan image "uploader" ichidagi "members" folderiga "memberImage" nomi ostida faqat bitta user image yuklash
  memberController.updateMember
);
router.get("/member/top-users", memberController.getTopUsers);

/**Product **/

/** Order **/

export default router;
