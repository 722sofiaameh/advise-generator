// Using AJAX Method..
// document.querySelector("#button").addEventListener("click", loadAdvice);
// document.addEventListener("DOMContentLoaded", loadAdvice);

// function loadAdvice() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "	https://api.adviceslip.com/advice", true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//       const advice = JSON.parse(this.responseText);
//       //  console.log(this.response);
//       const adviceText = document.getElementById('output');
//       adviceText.innerText = JSON.stringify(advice.slip.advice);
//       const adviceId = document.getElementById('advice-Id');
//       adviceId.innerText = JSON.stringify (advice.slip.id);
    
//     }
//   };

//   xhr.send();
// }
//END...


// Using Fetch/Promises Method...
// document.querySelector("#button").addEventListener('click', loadAdvice);
// document.addEventListener("DOMContentLoaded", loadAdvice);

// function loadAdvice () { fetch("https://api.adviceslip.com/advice")
//   .then((response) => {
//     return response.json();
//   })
//   .then((advice) => {
//     const adviceText = document.getElementById("output");
//     adviceText.innerText = JSON.stringify(advice.slip.advice);
//     const adviceId = document.getElementById('advice-Id');
//     adviceId.innerText = JSON.stringify (advice.slip.id);
//   })
//   .catch(err =>{
//     console.log(err)
//   })
// };

 //END 

 //using async/await method..
 document.querySelector("#button").addEventListener("click", loadAdvice);
 document.addEventListener("DOMContentLoaded", loadAdvice);
 async function loadAdvice (){
  const response = await fetch ('https://api.adviceslip.com/advice')

  const data = await response.json();
  return data;
 }
 loadAdvice().then(advice=>{console.log(advice.slip)
  const adviceText = document.getElementById("output");
  adviceText.innerText = JSON.stringify(advice.slip.advice);
  const adviceId = document.getElementById('advice-Id');
  adviceId.innerText = JSON.stringify (advice.slip.id);
})