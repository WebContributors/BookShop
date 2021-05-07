document.addEventListener("DOMContentLoaded", function () {
    const temp = document.querySelectorAll(".h");
    var i = 0;
    Array.from(temp).forEach(function (list) {
        i++;
        list.textContent = i;
    });

    const btns = document.querySelectorAll(".btn");
    Array.from(btns).forEach(function (bts) {
        bts.addEventListener("click", function (e) {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        });
    });

    const bot = document.querySelector(".bottom");
    bot.addEventListener("submit", function (e) {
        e.preventDefault();
        const val = bot.querySelector('input[type="text"]').value;
        const item = document.createElement("div");
        const p = document.createElement("p");
        const bt = document.createElement("button");
        const li = document.querySelector(".list-container");
        bt.textContent = "delete";
        bt.className = "btn";
        p.className = "h";
        p.textContent = val;
        item.appendChild(p);
        item.appendChild(bt);
        item.className = "item";
        li.appendChild(item);
    });

    const searchBar = document.querySelector("#sr");
    searchBar.addEventListener("keyup", function (e) {
        const st = e.target.value.toLowerCase();
        const items = document.querySelectorAll(".item");
        Array.from(items).forEach(function (it) {
            const tit = it.firstElementChild.textContent;
            if (tit.toLowerCase().indexOf(st) != -1) {
                it.style.display = "flex";
            } else {
                it.style.display = "none";
                it.className = "item";
            }
        });
    });
});
function scri() {}
