// 23. Lấy danh sách todos và lọc những todo chưa hoàn thành
async function fetchCompletedTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  const completed = todos.filter((todo: any) => todo.completed);
  console.log(completed);
}
fetchCompletedTodos();
