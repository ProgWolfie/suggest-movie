const inputs = document.querySelectorAll(".input"),
    loginbutton = document.querySelector(".login-button"),
    texts = document.querySelectorAll(".message"),
    modalbox = document.querySelector(".modal-screen"),
    modalbutton = document.querySelector(".modal-button"),
    modaltext = document.querySelector(".modal-screen p"),
    modalimage = document.querySelector(".modal-screen img");


inputs[0].addEventListener("blur", function () {
    if (inputs[0].value.length === 0) {
        texts[0].classList.remove("hide-message");
        texts[0].classList.remove("success");
        texts[0].classList.add("unsuccess");
        texts[0].innerHTML = " نام کاربری نباید خالی باشد"
    }
})

inputs[0].addEventListener("keyup", function () {
    if (inputs[0].value.length > 0) {
        texts[0].classList.remove("hide-message");
        texts[0].classList.remove("unsuccess");
        texts[0].classList.add("success");
        texts[0].innerHTML = "نام کاربری صحیح می باشد "
    } else {
        texts[0].classList.remove("hide-message");
        texts[0].classList.remove("success");
        texts[0].classList.add("unsuccess");
        texts[0].innerHTML = " نام کاربری نباید خالی باشد"

    }
})

modalbutton.addEventListener("click", function () {
    modalbox.classList.add("hidden");
});

loginbutton.addEventListener("click", function () {
    modalbox.classList.remove("hidden");
     if (inputs[0].value.length < 1){
        modaltext.innerHTML = "عملیات ناموفق بود دوباره تلاش کنید "
        modalimage.setAttribute("src", "./sources/images/failed.png");

    }
})


modalbutton.addEventListener("click", function () {
    modalbox.classList.add("hidden");
});