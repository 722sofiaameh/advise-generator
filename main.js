document.querySelector("#button").addEventListener("click", loadAdvice);

function loadAdvice() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "	https://api.adviceslip.com/advice", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const advice = JSON.parse(this.responseText);
      //  console.log(this.response);
      const adviceText = document.getElementById('output');
      adviceText.innerText = JSON.stringify(advice.slip.advice);
      const adviceId = document.getElementById('advice-Id');
      adviceId.innerText = JSON.stringify (advice.slip.id);
      // document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}
 document.addEventListener("DOMContentLoaded",loadAdvice);