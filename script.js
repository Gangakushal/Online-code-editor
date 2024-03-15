const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("javascript-code");
const output = document.getElementById("output");

function updateCode() {
  
  output.contentDocument.body.innerHTML = htmlCode.value;
  output.contentDocument.head.innerHTML = `<style>${cssCode.value}</style>`;


  const iframeScript = document.createElement("script");
  iframeScript.text = `(${jsCode.value})();`;
  output.contentDocument.body.appendChild(iframeScript);
}


htmlCode.addEventListener("input", updateCode);
cssCode.addEventListener("input", updateCode);
jsCode.addEventListener("input", updateCode);


updateCode();