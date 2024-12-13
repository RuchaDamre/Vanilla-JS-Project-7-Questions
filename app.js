let data = document.querySelectorAll(".data");
let ans = document.querySelectorAll(".ans");

data.forEach((que) => {

    const btn = que.querySelector(".btn");
    btn.addEventListener('click', () => {

        data.forEach((item) => {

            if (item != que)
                item.classList.remove("ans_show");
        })

        que.classList.toggle("ans_show");
    })

})