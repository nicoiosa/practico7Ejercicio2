import { Router } from "express";
import {
  createTask,
  deleteTask,
  listTasks,
} from "../controllers/tasks.controllers";

const router = Router();

router.route("/tasks").get(listTasks).post(createTask);
router.route("/tasks/:id").delete(deleteTask);

export default router;
