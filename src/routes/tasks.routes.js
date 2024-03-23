import { Router } from "express";
import {
  createTask,
  deleteTask,
  listTasks,
} from "../controllers/tasks.controllers.js";
import validationsTasks from "../helpers/validationsTasks.js";

const router = Router();

router.route("/tasks").get(listTasks).post([validationsTasks], createTask);
router.route("/tasks/:id").delete(deleteTask);

export default router;
