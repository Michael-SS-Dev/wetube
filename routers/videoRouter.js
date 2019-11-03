import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.video_detail, videoDetail);
videoRouter.get(routes.edit_videos, editVideo);
videoRouter.get(routes.delete_videos, deleteVideo);

export default videoRouter;
