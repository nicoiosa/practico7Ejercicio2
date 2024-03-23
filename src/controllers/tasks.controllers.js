import Task from "../database/models/task.js";

export const listTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Could not find the list of tasks",
    });
  }
};
export const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({
      message: "The task was created",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "The task could not be uploaded",
    });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const searchedTask = await Task.findById(req.params.id);
    if (!searchedTask) {
      return res.status(404).json({
        message: "Could not find the task",
      });
    }
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "The task was deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error ocurred trying to delete the task",
    });
  }
};
