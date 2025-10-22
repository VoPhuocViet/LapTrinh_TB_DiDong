import * as SQLite from "expo-sqlite";

export async function openDatabase() {
  const db = SQLite.openDatabaseSync("todo.db");

  // Tạo bảng và thêm dữ liệu mẫu nếu chưa có
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      done INTEGER DEFAULT 0
    );

    -- ✅ Thêm dữ liệu mẫu nếu chưa có
    INSERT INTO tasks (title, done)
    SELECT 'Học Expo SQLite', 0
    WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE title='Học Expo SQLite');

    INSERT INTO tasks (title, done)
    SELECT 'Làm bài lab tuần 8', 0
    WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE title='Làm bài lab tuần 8');

    INSERT INTO tasks (title, done)
    SELECT 'Hoàn thành dự án Todo', 1
    WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE title='Hoàn thành dự án Todo');
  `);

  return db;
}
