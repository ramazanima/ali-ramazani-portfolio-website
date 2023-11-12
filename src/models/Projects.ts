import mongoose, { Schema } from "mongoose";

const imageSchema = new Schema(
  {
  image: String,
  name:String
});

const projectsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    para1: {
      type: String,
      required: true,
    },
    para2: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    deliverables: {
      type: String,
      required: true,
    },
    images: {type:[imageSchema],required:true},
    category: { type: Schema.Types.ObjectId, ref: 'Category',required:true },
  },
  { timestamps: true }
)

const Project = mongoose.models.Project || mongoose.model("Project", projectsSchema)

export default Project