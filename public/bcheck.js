let isIE = /*@cc_on!@*/false || !!document.documentMode;
console.log(isIE)
if (isIE === true){
  let rootcontainer = document.getElementById('root')
  rootcontainer.innerHTML = "<h1>PLEASE DO NOT USE INTERNET EXPLORER, PLEASE USE CHROME OR FIREFOX TO VIEW THIS WEBSITE</h1>"
}