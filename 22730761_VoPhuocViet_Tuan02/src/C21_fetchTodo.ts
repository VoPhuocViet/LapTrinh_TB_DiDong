// 21. Sử dụng fetch để lấy dữ liệu từ public API
async function fetchTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
fetchTodo();
