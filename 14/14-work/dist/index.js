(()=>{"use strict";let e=0,t=document.body,n=document.createElement("div");n.classList.add("container");let c=document.createElement("button");c.classList.add("btn"),c.innerHTML=e+" clicks",c.addEventListener("click",(function(){c.innerHTML=e+++" clicks"})),n.appendChild(c),t.appendChild(n)})();