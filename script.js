
const whatTosay = ["Hell this is test. Test","","",""];
const keyWords  = ["password","enter","username","sign up", "login","email"];
const utterance = [speech,speech1,speech2,speech3];
var speaking = false;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;                                       

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    if (e.results[0].isFinal){
        if(text.includes('password')){
            document.getElementById
        }
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();

document.addEventListener("DOMContentLoaded", () => {
    speak(0);
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");
    const resetPWForm = document.querySelector("#resetPW");
    for(var i =0; i < whatTosay.length; i++){
        utterance[i] = new SpeechSynthesisUtterance(whatTosay[i]);
    }
    const acButton = document.getElementById("acButton");

    

    document.querySelector("#linkSignup").addEventListener("click", () => {
        loginForm.classList.add("form--hidden");
        signupForm.classList.remove("form--hidden");
        resetPWForm.classList.add("form--hidden");
    });

    document.querySelector("#linkResetPW").addEventListener("click", () => {
        loginForm.classList.add("form--hidden");
        signupForm.classList.add("form--hidden");
        resetPWForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin1").addEventListener("click", () => {
        loginForm.classList.remove("form--hidden");
        signupForm.classList.add("form--hidden");
        resetPWForm.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin2").addEventListener("click", () => {
        loginForm.classList.remove("form--hidden");
        signupForm.classList.add("form--hidden");
        resetPWForm.classList.add("form--hidden");
    });
});

window.addEventListener('keydown', function () {
    if(speaking == false){
        if(event.key.toUpperCase)
        speak();
    }
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

function speak(e) {
    console.log("speak")
    //const textInput = document.getElementById("text").value;
    speaking = true; 
    speech.lang = "en-US";
    window.speechSynthesis.speak(utterance[e]);
    utterance[e].onend = function(event){
        speaking = false;
        console.log("speech ended")
    }
  }