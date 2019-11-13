import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  // Configuration이 필요한 경우에는 {}를 통해 객체로 만들어 기본값, required를 정한다.
  // 그렇지 않은 경우에는 그냥 한줄로 String !
  createdAt: {
    type: Date,
    default: Date.now
  }
  // 아래 방식은 video의 아이디로 comment 스키마와 맵핑하는 법
  /*
  video: {
    // mongoose 내에 저장되어있는 model 중 하나로 type을 지정할 수 있고,
    // 어떤 model을 참조했는지를 ref: "NAME"을 맵핑한다.
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }
  */
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
