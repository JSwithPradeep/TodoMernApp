import { Router } from "express";
import { deletTodo, getTodos, saveTodo, updateTodo } from "../controller/todoController.js";
const router = Router();

router.get("/get", getTodos);
router.post("/post", saveTodo);
router.delete("/delete/:id", deletTodo);
router.put("/update/:id", updateTodo)

export default router;