const moduloJuego=(()=>{"use strict";let e=[],t=["C","D","H","S"],l=["A","J","Q","K"],r=[],a=document.querySelector("#btnPedir"),n=document.querySelector("#btnNuevo"),s=document.querySelector("#btnDetener"),d=document.querySelector("#btnAceptar"),i=document.querySelectorAll("small"),o=document.querySelectorAll(".divCartas"),c=document.querySelector("#dialog"),u=document.querySelector("#dialogTitulo"),$=document.querySelector("#dialogInstrucciones"),b=(t=2)=>{e=g(),r=[];for(let l=0;l<t;l++)r.push(0),o[l].innerHTML="",i[l].innerText=r[l]},g=()=>{for(let r of t){for(let a=2;a<=10;a++)e.push(a+r);for(let n of l)e.push(n+r)}return _.shuffle(e)},h=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},m=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:parseInt(t)},p=(e,t)=>{c.className="",u.innerText=e,$.innerText=t},f=(e,t)=>(r[t]=r[t]+m(e),i[t].innerText=r[t],r[t]),y=(e,t)=>{let l=document.createElement("img");l.src=`assets/cartas/${e}.png`,l.className="md:max-w-40 max-w-20",l.alt=`Carta-${e}`,o[t].append(l)},S=()=>{let[e,t]=r;t>e&&t<=21?p("Perdiste !!!"," \uD83D\uDE16\uD83D\uDE16\uD83D\uDE16\uD83D\uDE16\uD83D\uDE16\uD83D\uDE16\uD83D\uDE16 "):t===e?p("Empate !!!"," \uD83E\uDD6A\uD83E\uDD6A\uD83E\uDD6A\uD83E\uDD6A\uD83E\uDD6A\uD83E\uDD6A\uD83E\uDD6A\uD83E\uDD6A "):p("Ganaste !!!"," \uD83E\uDD73\uD83E\uDD73\uD83E\uDD73\uD83E\uDD73\uD83E\uDD73\uD83E\uDD73\uD83E\uDD73 ")},q=e=>{let t=0;do{let l=h();if(t=f(l,r.length-1),y(l,r.length-1),e>21)break}while(t<e&&e<=21);S()};return d.addEventListener("click",()=>{c.className="hidden"}),n.addEventListener("click",()=>{b(),a.disabled=!1,s.disabled=!1}),a.addEventListener("click",()=>{let e=h(),t=f(e,0);y(e,0),t>21?(s.disabled=!0,q(t),c.className="",p("\xa1 Perdiste !","Pero puedes iniciar un nuevo juego"),a.disabled=!0,s.disabled=!0):21===t&&(a.disabled=!0,s.disabled=!0,q(t))}),s.addEventListener("click",()=>{a.disabled=!0,s.disabled=!0,q(r[0])}),{nuevoJuego:b}})();