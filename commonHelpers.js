(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const o=document.querySelector(".filter-buttons"),u=document.querySelector(".exercise-cards"),d="https://energyflow.b.goit.study/api";o.addEventListener("click",f);l("Muscles").then(a);async function f(s){const{filter:t}=s.target.dataset;if(!t)return;await l(t).then(a);const i=o.querySelector(".active"),n=s.target;i.disabled=!1,n.disabled=!0,i.classList.remove("active"),n.classList.add("active")}async function l(s){return fetch(`${d}/filters?filter=${s}&page=1&limit=12`).then(t=>t.json()).then(t=>t.results)}function a(s){u.innerHTML=s.map(p)}function p({name:s,filter:t,imgUrl:i}){return`
    <li class="exercise-card">
      <img src="${i}" alt="${s}">
      <h4>${s}</h4>
      <h6>${t}</h6>
    </li>
  `}
//# sourceMappingURL=commonHelpers.js.map
