import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
// route.js에서 함수로 정의한 경우 반드시 뒤에 ()를 붙여줘야 함
videoRouter.get(routes.video_detail(), videoDetail);
videoRouter.get(routes.edit_videos(), editVideo);
videoRouter.get(routes.delete_videos(), deleteVideo);

export default videoRouter;
