
const whatTosay = ["This is the login page","Password Selected","Username Selected","Email Selected","returning", "Login Page", "Sign Up Page","Enter"];
const keyWords  = ["password","username","email","sign up", "login","exit","submit"];
var speaking = false;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const signUp = [document.querySelector("#signUpUsername"),document.querySelector("#signUpPassword")];
const login = [document.querySelector("#loginUsername"),document.querySelector("#loginPassword")];
const synth = window.speechSynthesis;
const recognition = new window.SpeechRecognition();
const loginForm = document.querySelector("#login");
const signupForm = document.querySelector("#signup");

const loginStates = {
    login: login,
    signup: signUp
}

const pageStates = {
    none: 'none',
    email: 'email',
    username: 'username',
    password: 'password',
  };
this.pageState = pageStates.none;
this.loginState = loginStates.login;

document.addEventListener("DOMContentLoaded", () => {
    speak(whatTosay[0]);  
    document.querySelector("#linkSignup").addEventListener("click", () => {
        loginForm.classList.add("form--hidden");
        signupForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin1").addEventListener("click", () => {
        loginForm.classList.remove("form--hidden");
        signupForm.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin2").addEventListener("click", () => {
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
// speechSynthesis (text to speech)

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  /* "This is the login page" 0
  "Password Selected", 1
  "Username Selected", 2
  "Email Selected", 3
  "returning", 4
  "Login Page", 5
  "Sign Up Page 6 
  "Enter" 7
  */ 
  recognition.interimResults = true;                                       
  recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
    if (e.results[0].isFinal){
        if(text == keyWords[5]){
            console.log("in here");
            speak(whatTosay[4]);
            this.pageState = pageStates.none;
            document.activeElement.blur();
        }
        console.log(loginState == loginStates.login);
        switch (pageState) {  
            case pageStates.none:
                if(text.includes(keyWords[0])){
                    speak(whatTosay[1]);
                    this.loginState[1].focus();
                    this.pageState = pageStates.password;
                    
                }
                else if(text.includes(keyWords[1])){
                    speak(whatTosay[2]);
                    this.loginState[0].focus();
                    this.pageState = pageStates.username;
                }
                else if(text.includes(keyWords[2])&& loginState == loginStates.signup){
                    speak(whatTosay[3]);
                    document.querySelector("#signUpEmail").focus();
                    this.pageState = pageStates.email;
                }
                else if(text.includes(keyWords[3])){
                    speak(whatTosay[6]);
                    this.pageState = pageStates.none;
                    loginState = loginStates.signup;
                    loginForm.classList.add("form--hidden");
                    signupForm.classList.remove("form--hidden");
                }
                else if(text.includes(keyWords[4])){
                    speak(whatTosay[5]);
                    this.pageState = pageStates.none;
                    loginState = loginStates.login;
                    loginForm.classList.remove("form--hidden");
                    signupForm.classList.add("form--hidden");
                }
                else if(text.includes(keyWords[6])){
                    speak(whatTosay[7]);
                    if(loginState == loginStates.login){
                        document.querySelector("#submitLogin").click();
                    }
                    else{
                        document.querySelector("#submitSignup").click()
                    }
                }
                break;
            case pageStates.email:
                    console.log(signup[2]);
                    var bufferEmail = text.replace(/\s+/g, '');
                    bufferEmail = bufferEmail.replace('at','@')
                    signup[1].value = bufferEmail;
                    speak("Email set as " + text);
                break;
            case pageStates.username:
                    loginState[0].value = text.replace(/\s+/g, '');
                    speak("user name set as " + text);
                break;
            case pageStates.password:
                    console.log(loginState[1]);
                    loginState[1].value = text.replace(/\s+/g, '');
                    speak("password name set as " + text);
                break;
            default:
                throw new Error("Unknown state");
        }  
    }
  });
  
  recognition.addEventListener('end', () => {
      recognition.start();
  })
  
  recognition.start();
  
window.addEventListener('keydown', function () {
    if(speaking == false){
        if(event.key.toUpperCase)
        speak(0);
    }
});