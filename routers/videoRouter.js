import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
// postUpload전에 uploadVideo를 해준다. 파일 경로를 만들어주는 multer 라이브러리 사용 !
videoRouter.post(routes.upload, uploadVideo, postUpload);
// route.js에서 함수로 정의한 경우 반드시 뒤에 ()를 붙여줘야 함
videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
