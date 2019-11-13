import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: `File URL is required`
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // 아래 방식은 comment의 아이디로 Video 스키마와 맵핑하는 법
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Video", VideoSchema);
export default model;
