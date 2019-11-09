import { videos } from "../db";
import routes from "../routes";
// render 함수의 첫번째 인자는 템플릿이고, 두번째 인자는
// 템플릿에 추가할 정보가 담긴 객체이다.
export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const search = (req, res) => {
  // const searchingBy = req.query.term과 같은 의미
  // query는 get으로 보냈기 때문에 쓰는 것 get으로 넘어오는것 query로 받음
  //console.log(req.query);
  const {
    query: { term: searchingBy }
  } = req;
  // 입력변수와 보내려는 변수의 이름이 같은 경우 그냥 하나만 써도 인식
  // res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
  // searchingBy만 써도 되는거는 자바스크립트 최신 버전 ecma6와 babel 덕분
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // TO Do : Upload and save video
  res.redirect(routes.video_detail(324393));
};
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
