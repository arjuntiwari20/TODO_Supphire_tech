import Todo from '../model/todo.js';

// ✅ CREATE Todo
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTodo = new Todo({ title, description });
    const savedTodo = await newTodo.save();

    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create todo', error: error.message });
  }
};


export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ isDeleted: false }).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos', error: error.message });
  }
};



// 🔁 UPDATE Todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update todo', error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const softDeletedTodo = await Todo.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    if (!softDeletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo hidden from user dashboard (soft deleted)' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to soft delete todo', error: error.message });
  }
};










