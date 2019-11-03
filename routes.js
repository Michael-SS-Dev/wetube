// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//USER

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit_profile";
const CHANGE_PASSWORD = "/:id/change_password";

//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEOS = "/:id/edit";
const DELETE_VIDEOS = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  user_detail: USER_DETAIL,
  edit_profile: EDIT_PROFILE,
  change_password: CHANGE_PASSWORD,

  videos: VIDEOS,
  upload: UPLOAD,
  video_detail: VIDEO_DETAIL,
  edit_videos: EDIT_VIDEOS,
  delete_videos: DELETE_VIDEOS
};

export default routes;
