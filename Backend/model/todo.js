
// Backend/model/todo.js
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    isDeleted: {
      type: Boolean,
      default: false, // not deleted initially
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// ✅ Default export
const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
