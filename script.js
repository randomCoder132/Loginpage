document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");

    document.querySelector("#linkSignup").addEventListener("click", () => {
        loginForm.classList.add("form--hidden");
        signupForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", () => {
        loginForm.classList.remove("form--hidden");
        signupForm.classList.add("form--hidden");
    });

});



/*===== FOCUS =====*/
// creates the animation where the text floats up
const inputs = document.querySelectorAll(".form__input")
function addfocus() {
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}
function remfocus() {
    let parent = this.parentNode.parentNode
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addfocus)
    input.addEventListener("blur", remfocus)
})

