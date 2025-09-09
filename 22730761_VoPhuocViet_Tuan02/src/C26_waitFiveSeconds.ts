// 26. Dùng async/await với setTimeout để giả lập chờ 5 giây
async function waitFiveSeconds() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Đã chờ 5 giây!");
}
waitFiveSeconds();
