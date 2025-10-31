console.log("Hello, Putri's Todo App is running!");

// Local array to store todo items
let todos = [];

// Fungsi validasi form input
function validateForm(todo, date) {
  if (todo.trim() === "" || todo.length === 0) {
    alert("Please enter a todo item.");
    return false;
  }
  if (date === "") {
    alert("Please select a due date.");
    return false;
  }
  return true;
}

// Fungsi untuk menambahkan todo baru
function addTodo() {
  const todoInput = document.getElementById("todo-input").value;
  const todoDate = document.getElementById("todo-date").value;

  // Validasi form
  if (!validateForm(todoInput, todoDate)) {
    return;
  }

  // Tambahkan ke array todos
  todos.push({ task: todoInput, dueDate: todoDate });
  console.log("Current Todos:", todos);

  // Render ulang daftar todo
  renderTodos();

  // Kosongkan input setelah ditambahkan
  document.getElementById("todo-input").value = "";
  document.getElementById("todo-date").value = "";
}

// Fungsi untuk menampilkan daftar todo di layar
function renderTodos() {
  const todoList = document.getElementById("todo-list");

  // Hapus tampilan lama
  todoList.innerHTML = "";

  // Jika belum ada todo
  if (todos.length === 0) {
    todoList.innerHTML = "<p class='text-gray-500'>No todos available</p>";
    return;
  }

  // Tampilkan semua todo
  todos.forEach((todo, index) => {
    todoList.innerHTML += `
      <li class="flex justify-between items-center bg-white p-2 rounded shadow-sm">
        <span>${todo.task} - <small class="text-gray-500">${todo.dueDate}</small></span>
        <button class="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-500"
          onclick="deleteTodo(${index})">Delete</button>
      </li>
    `;
  });
}

// Fungsi untuk menghapus satu todo
function deleteTodo(index) {
  if (confirm("Are you sure you want to delete this todo?")) {
    todos.splice(index, 1); // hapus item berdasarkan indeks
    renderTodos(); // render ulang daftar
  }
}

// Fungsi untuk menghapus semua todo
function clearAllTodos() {
  if (todos.length === 0) {
    alert("No todos to clear!");
    return;
  }

  if (confirm("Are you sure you want to clear all todos?")) {
    todos = [];
    renderTodos();
    console.log("All todos cleared.");
  }
}

// Fungsi untuk memfilter todo (contoh sederhana)
function filterTodos() {
  if (todos.length === 0) {
    alert("No todos to filter!");
    return;
  }

  const today = new Date().toISOString().split("T")[0]; // tanggal hari ini
  const filtered = todos.filter(todo => todo.dueDate === today);

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  if (filtered.length === 0) {
    todoList.innerHTML = `<p class="text-gray-500">No todos for today (${today})</p>`;
  } else {
    filtered.forEach((todo, index) => {
      todoList.innerHTML += `
        <li class="flex justify-between items-center bg-white p-2 rounded shadow-sm">
          <span>${todo.task} - <small class="text-gray-500">${todo.dueDate}</small></span>
          <button class="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-500"
            onclick="deleteTodo(${index})">Delete</button>
        </li>
      `;
    });
  }
}

// Fungsi untuk mengganti warna background
function changeBackgroundColor() {
  const colors = ["#fef3c7", "#e0f2fe", "#fce7f3", "#dcfce7", "#fef9c3", "#e9d5ff", "#ffe4e6"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

  console.log("Background color changed to:", randomColor);
}
