console.log("Hello, Putri's Todo App is running!");

// Local array to store todo items
let todos = [];
let isFiltered = false; // status apakah sedang difilter
let filteredTodos = []; // data hasil filter

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

  if (!validateForm(todoInput, todoDate)) return;

  todos.push({ task: todoInput, dueDate: todoDate });
  console.log("Current Todos:", todos);

  renderTodos();

  document.getElementById("todo-input").value = "";
  document.getElementById("todo-date").value = "";
}

// Fungsi menampilkan daftar todo di layar
function renderTodos(list = todos) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  if (list.length === 0) {
    todoList.innerHTML = "<p class='text-gray-500'>No todos available</p>";
    return;
  }

  list.forEach((todo, index) => {
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
    todos.splice(index, 1);
    renderTodos(isFiltered ? filteredTodos : todos);
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
    filteredTodos = [];
    isFiltered = false;
    renderTodos();
    console.log("All todos cleared.");
  }
}

// ✅ Fungsi filter berdasarkan kata kunci
function filterTodos() {
  if (todos.length === 0) {
    alert("No todos to filter!");
    return;
  }

  const keyword = prompt("Enter a keyword to filter todos (case insensitive):");

  if (!keyword || keyword.trim() === "") {
    alert("Please enter a valid keyword!");
    return;
  }

  filteredTodos = todos.filter(todo =>
    todo.task.toLowerCase().includes(keyword.toLowerCase())
  );

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  if (filteredTodos.length === 0) {
    todoList.innerHTML = `<p class="text-gray-500">No todos match "${keyword}"</p>`;
  } else {
    renderTodos(filteredTodos);
  }

  isFiltered = true;
  document.getElementById("reset-filter-btn").classList.remove("hidden"); // tampilkan tombol reset
}

// ✅ Fungsi untuk mereset filter (tampilkan semua todo lagi)
function resetFilter() {
  isFiltered = false;
  filteredTodos = [];
  renderTodos(todos);
  document.getElementById("reset-filter-btn").classList.add("hidden"); // sembunyikan tombol reset lagi
  console.log("Filter reset, showing all todos.");
}

// Fungsi ganti warna background
function changeBackgroundColor() {
  const colors = ["#fef3c7", "#e0f2fe", "#fce7f3", "#dcfce7", "#fef9c3", "#e9d5ff", "#ffe4e6"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

  console.log("Background color changed to:", randomColor);
}
