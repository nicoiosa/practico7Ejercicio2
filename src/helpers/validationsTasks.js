import { check } from "express-validator";
import resultValidations from "./resultValidations.js";

const validationsTasks = [
  check("task")
    .notEmpty()
    .withMessage("The task is obligatory")
    .isLength({ min: 2, max: 100 })
    .withMessage("The task name must have between 2 and 100 characters"),
  (req, res, next) => resultValidations(req, res, next),
];
export default validationsTasks;
