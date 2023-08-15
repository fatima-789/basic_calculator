// let string = "";
// let button = document.querySelectorAll(".btn");
// let inputField = document.querySelector("#calculatorInput");

let string = "";
let buttons = document.querySelectorAll(".btn");
let inputField = document.querySelector("#calculatorInput");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleButtonPress(e.target.innerHTML);
  });
});

document.addEventListener("keydown", (e) => {
  // Prevent the "keydown" event from firing twice
  e.preventDefault();

  // Check if the pressed key is a number, operator, or decimal point
  const validKeys = /[0-9+\-*/.%]/;
  if (validKeys.test(e.key)) {
    handleButtonPress(e.key);
  } else if (e.key === "Enter") {
    handleButtonPress("=");
  } else if (e.key === "c" || e.key === "C") {
    handleButtonPress("AC");
  }
});

function handleButtonPress(key) {
  switch (key) {
    case "=":
      string = eval(string);
      inputField.value = string;
      break;
    case "AC":
      string = "";
      inputField.value = string;
      break;
    default:
      console.log(key);
      string = string + key;
      inputField.value = string;
  }
}


// Array.from(button).forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         if(e.target.innerHTML == "="){
//             string = eval(string);
//             document.querySelector("input").value = string;
//         }
        
//         else if(e.target.innerHTML == "AC"){
//             string = "";
//             document.querySelector("input").value = string;
//         }

//         else{
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector("input").value = string;
//         }
//     });
// });
// inputField.addEventListener("keydown", (e) => {
//     // Check for the pressed key
//     if (e.key === "=") {
//       string = eval(string);
//       inputField.value = string;
//     } else if (e.key === "AC") {
//       string = "";
//       inputField.value = string;
//     } else {
//       console.log(e.key);
//       string = string + e.key;
//       inputField.value = string;
//     }
//   });