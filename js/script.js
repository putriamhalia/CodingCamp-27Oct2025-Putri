console.log("Hello World");

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
    alert("Form validation failed. Please check your inputs.");
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
    todoList.innerHTML = "<p>No todos available</p>";
    return;
  }

  // Tampilkan semua todo
  todos.forEach((todo, index) => {
    todoList.innerHTML += `
      <li>
        <span>${todo.task} - ${todo.dueDate}</span>
        <button onclick="deleteTodo(${index})">Delete</button>
      </li>
    `;
  });
}

// Fungsi untuk menghapus satu todo
function deleteTodo(index) {
  todos.splice(index, 1); // hapus item berdasarkan indeks
  renderTodos(); // render ulang daftar
}

// Fungsi untuk menghapus semua todo
function clearAllTodos() {
  todos = [];
  renderTodos();
  console.log("All todos cleared.");
}

// Fungsi untuk memfilter todo (contoh sederhana)
function filterTodos() {
  alert("Filter feature coming soon!");
}
