let body=document.querySelector(".body"),popupBg=document.querySelector(".popup-bg"),popup=document.querySelector(".popup"),openPopupButtons=document.querySelectorAll(".button"),closePopupButton=document.querySelector(".close-popup"),counter=document.querySelector(".counter");var main=document.querySelector("main"),lockPaddingValue=window.innerWidth-document.querySelector(".main").offsetWidth+"px";openPopupButtons.forEach(e=>{e.addEventListener("click",e=>{let o=document.querySelector(".counter");o.innerHTML=+o.innerHTML+1,e.preventDefault(),body.style.paddingRight=lockPaddingValue,popupBg.classList.add("active"),popup.classList.add("active"),document.body.style.overflowY="hidden"})}),closePopupButton.addEventListener("click",()=>{popupBg.classList.remove("active"),popup.classList.remove("active"),setTimeout(function(){body.style.overflowY="visible",body.style.paddingRight="0px"},500)}),document.addEventListener("click",e=>{e.target===popupBg&&(popupBg.classList.remove("active"),popup.classList.remove("active"),setTimeout(function(){body.style.overflowY="visible",body.style.paddingRight="0px"},500))});