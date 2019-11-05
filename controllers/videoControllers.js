// render 함수의 첫번째 인자는 템플릿이고, 두번째 인자는
// 템플릿에 추가할 정보가 담긴 객체이다.
export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  // const searchingBy = req.query.term과 같은 의미
  const {
    query: { term: searchingBy }
  } = req;
  // 입력변수와 보내려는 변수의 이름이 같은 경우 그냥 하나만 써도 인식
  // res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
