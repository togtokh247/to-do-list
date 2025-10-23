const list = document.querySelector(".list");
const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const buttons = document.querySelectorAll(".buttons button");

let content = [];
let type = "All";
let id = 1;

const ListItem = (item) => {
  return `
    <div class="item">
      <input class="checkbox" type="checkbox" data-id="${item.id}" ${item.isDone ? "checked" : ""} />
      <p>${item.text}</p>
      <button class="delete-btn" data-id="${item.id}">Delete</button>
    </div>
  `;
};

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  content.push({
    id: id,
    text: input.value,
    isDone: false,
  });

  id++;
  input.value = "";
  render();
});

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    buttons.forEach((button) => button.classList.remove("chosen"));
    btn.classList.add("chosen");

    if (i === 0) type = "All";
    else if (i === 1) type = "Active";
    else type = "Completed";

    render();
  });
});

const render = () => {
  const elements = content
    .filter((item) => {
      if (type === "All") return true;
      if (type === "Active") return !item.isDone;
      return item.isDone;
    })
    .map((item) => ListItem(item))
    .join("");

  list.innerHTML = elements;
  addListeners();
};

const addListeners = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const checkboxes = document.querySelectorAll(".checkbox");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemId = parseInt(btn.dataset.id);
      content = content.filter((item) => item.id !== itemId);
      render();
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      const itemId = parseInt(checkbox.dataset.id);
      const item = content.find((item) => item.id === itemId);
      if (item) item.isDone = !item.isDone;
      render();
    });
  });
};
