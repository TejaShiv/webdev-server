let todos = [
  { id: 1, title: "Task 1", description: "Description 1", due: "2026-09-09", completed: false },
  { id: 2, title: "Task 2", description: "Description 2", due: "2026-09-10", completed: true },
  { id: 3, title: "Task 3", description: "Description 3", due: "2026-09-11", completed: false },
  { id: 4, title: "Task 4", description: "Description 4", due: "2026-09-12", completed: true },
];

export default function WorkingWithArrays(app) {
  // The completed filter must be checked before the generic list is sent.
  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const completedBool = completed === "true";
      res.json(todos.filter((t) => t.completed === completedBool));
      return;
    }
    res.json(todos);
  });

  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      description: "New Description",
      due: "2026-12-31",
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  });

  app.get("/lab5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    todos = todos.filter((t) => t.id !== parseInt(id));
    res.json(todos);
  });

  app.get("/lab5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) todo.title = title;
    res.json(todos);
  });

  // This generic :id route goes last so /create and /:id/delete match first.
  app.get("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.status(404).json({ message: `Unable to find todo with id ${id}` });
      return;
    }
    res.json(todo);
  });
}
