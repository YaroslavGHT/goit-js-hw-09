!function(){var t=!1,e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),o=document.querySelector("body");e.disabled=!1,a.disabled=!0,t||(e.addEventListener("click",(function(){t=!0,e.disabled=!0,a.disabled=!1,changeColor=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(){clearInterval(changeColor),e.disabled=!1,a.disabled=!0})))}();
//# sourceMappingURL=01-color-switcher.9f0a7af9.js.map