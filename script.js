$(function () {
    $(".todo-button").on("click", function (e) {
        e.preventDefault();
        const todoInput = $(".todo-input").val();
        const todoList = $(".todo-list");

        let div = $(`<div></div>`);
        div.addClass("todo")

        let li = $(`<li>${todoInput}</li>`)
        li.addClass("todo-item");
        div.append(li);
        
        let checkedBtn = $(`<button><i class=\"fas fa-check\"></i></button>`);
        checkedBtn.addClass("checkBtn");
        div.append(checkedBtn);

        let deleteBtn = $(`<button><i class=\"fa-solid fa-xmark\"></i></button>`);
        deleteBtn.addClass("deleteBtn");
        div.append(deleteBtn);

        todoList.append(div);
    });

    $("ul").on("click", ".deleteBtn",function (e) {
      e.target.parentElement.remove();
    });
    $("ul").on("click", ".checkBtn",function (e) {
      e.target.parentElement.classList.add("completed");
    });
  });
  