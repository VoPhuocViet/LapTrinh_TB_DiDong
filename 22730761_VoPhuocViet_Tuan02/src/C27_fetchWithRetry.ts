// 27. fetchWithRetry: gọi lại nếu lỗi, tối đa retries lần
async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("HTTP error");
      return await res.json();
    } catch (e) {
      if (i === retries - 1) throw e;
      console.log(`Thử lại lần ${i + 2}`);
    }
  }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then(console.log)
  .catch(console.error);
