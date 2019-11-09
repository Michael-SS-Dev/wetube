// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//USER

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit_profile";
const CHANGE_PASSWORD = "/change_password";

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
  user_detail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  edit_profile: EDIT_PROFILE,
  change_password: CHANGE_PASSWORD,

  videos: VIDEOS,
  upload: UPLOAD,
  video_detail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  edit_videos: id => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEOS;
    }
  },
  delete_videos: id => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEOS;
    }
  }
};

export default routes;
