// 28. batchProcess: xử lý 5 tác vụ async cùng lúc
async function asyncTask(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000 * id));
  return `Task ${id} done`;
}

async function batchProcess() {
  const tasks = [1, 2, 3, 4, 5].map(asyncTask);
  const results = await Promise.all(tasks);
  console.log(results);
}
batchProcess();
