import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../Controllers/controller.js';

const router = express.Router();

router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.get('/', getTodos);

export default router;
