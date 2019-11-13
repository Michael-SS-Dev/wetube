import multer from "multer";
// 왜 #표시된 이하의 내용을 middlewaredp dlavhxm?
import routes from "./routes";
//videos에 생성된 URL 집어 넣는다.
//multer가 파일url을  저장하는 경로를 지정
export const multerVideo = multer({ dest: "uploads/videos/" });

// #2.16 Local Variables in Pug
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

// input으로 제출되는 videoFile의 이름을 single ()에 넣는다. 괄호 안의 이름!
export const uploadVideo = multerVideo.single("videoFile");
