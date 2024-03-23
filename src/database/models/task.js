import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  task: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
});

const Task = mongoose.model("task", TaskSchema);

export default Task;
