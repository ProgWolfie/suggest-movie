const inputs = document.querySelectorAll(".input"),
    loginbutton = document.querySelector(".login-button"),
    texts = document.querySelectorAll(".message");

inputs[0].addEventListener("blur", function () {
    if (inputs[0].value.length === 0) {
        texts[0].classList.remove("hide-message");
        texts[0].classList.remove("success");
        texts[0].classList.add("unsuccess");
        texts[0].innerHTML = "نام کاربری نباید خالی باشد";
    }
});

inputs[0].addEventListener("keyup", function () {
    if (inputs[0].value.length > 0) {
        texts[0].classList.remove("hide-message");
        texts[0].classList.remove("unsuccess");
        texts[0].classList.add("success");
        texts[0].innerHTML = "نام کاربری صحیح می‌باشد";
    } else {
        texts[0].classList.remove("hide-message");
        texts[0].classList.remove("success");
        texts[0].classList.add("unsuccess");
        texts[0].innerHTML = "نام کاربری نباید خالی باشد";
    }
});

loginbutton.addEventListener("click", function () {
    const username = inputs[0].value.trim();

    if (username.length === 0) {
        texts[0].classList.remove("hide-message");
        texts[0].classList.remove("success");
        texts[0].classList.add("unsuccess");
        texts[0].innerHTML = "نام کاربری نباید خالی باشد";
        return;
    }

    // ساختن فرم به صورت داینامیک برای ارسال با POST
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "login_action.php";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "username";
    input.value = username;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();  // ارسال فرم (ریدایرکت همراه با POST)
});
