let sbmt = document.querySelector(".sbmt-btn");
sbmt.addEventListener("click", async (e) => {
  e.preventDefault();
  const resultCont = document.getElementById("resultCont");
  resultCont.innerHTML = `<div><img src="./img/loading.svg" alt="not-loading"></div>`

  let key = "ema_live_srh5xLBuko1GwCoocINNqaqcufSmCxswqz3dCFsA"
  let email = document.getElementById("email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (item of Object.keys(result)) {
    if(result[item] != "" && result[item] != " ") {
      str = str + `<div>${item} : ${result[item]}</div>`;
    }
  }
  resultCont.innerHTML = str;
});
