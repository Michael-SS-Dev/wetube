import routes from "../routes";
import Video from "../models/Video";
import { TSArrayType } from "babel-types";
// render 함수의 첫번째 인자는 템플릿이고, 두번째 인자는
// 템플릿에 추가할 정보가 담긴 객체이다.
export const home = async (req, res) => {
  // async를 통해 await 뒤의 작업이 끝날 때까지 이후 작업을 멈춘다.
  // async로 감싸야 await를 사용 가능하다.
  // 성공 여부는 중요하지 않다. 만약 실패하더라도 실패할때까지 기다린다.
  // Video.find({})는 Video 모델 안 모든 데이터에 대한 조회를 의미한다.
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
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
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  // TO Do : Upload and save video
  res.redirect(routes.video_detail(newVideo.id));
};
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    console.log("✅" + id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
  console.log(video);
  res.render("videoDetail", { pageTitle: "Video Detail" });
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", {
      pageTitle: `Edit ${video.title} `,
      video
    });
  } catch (error) {}
  res.render("editVideo", { pageTitle: "Edit Video" });
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    console.log(title, description);
    // id가 id인걸 찾아서 formd의 title, descrption으로 업데이트해라
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
