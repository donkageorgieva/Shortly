!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class i{constructor(){this.linkList=document.querySelector(".linkList")}loading(e){if(e){const e=this.linkList.querySelector("h2");this.linkList.removeChild(e);(new o).getTheLink("linkExists")}else{if(null!=this.linkList.querySelector("h2"))return;{const e=document.createElement("h2");e.textContent="Loading...",e.classList.add("py-4");document.querySelector(".linkList").append(e)}}}displayALink(e,t){if(null!=this.linkList.querySelector("h2")){const e=this.linkList.querySelector("h2");this.linkList.removeChild(e)}const n=document.createElement("div");n.classList.add("linksStyle"),n.classList.add("my-1"),n.innerHTML=`<div class='m1'><p class='py-2'>${e} </p></div><div class='flex '> <a href="#" class='py-2'>${t} </a> <button class='copy-btn'> Copy</button></div>`,this.linkList.append(n),this.copyAlink(this.linkList)}copyAlink(e){e.addEventListener("click",e=>{if("BUTTON"===e.target.tagName){e.target.classList.add("copied"),e.target.textContent="Copied";const t=e.target.closest("div").querySelector("a").textContent;navigator.clipboard.writeText(t)}})}}class r extends i{addToStorage(e){(new i).displayALink(e.original_link,e.full_short_link);const t=JSON.stringify(e.original_link),n=JSON.stringify(e);window.localStorage.setItem(t,n)}checkStorage(e,t){if(null===localStorage.getItem(JSON.stringify(t)))this.addToStorage(e);else{(new i).loading("linkExists")}}}class s extends i{async shortenALink(e){this.loading();try{const t=await fetch("https://api.shrtco.de/v2/shorten?url="+e,{method:"POST"}),n=await t.json(),i=n.result.original_link;(new r).checkStorage(n.result,i)}catch(e){console.log(e),document.querySelector("input").classList.add("invalid"),this.loading()}}}class o{inputHandler(){const e=document.querySelector("form input");e.addEventListener("focus",()=>{""!==e.value&&e.select()})}init(){this.inputHandler(),document.querySelector(".shorten-btn").addEventListener("click",e=>{e.preventDefault(),this.getTheLink()})}getTheLink(e){const t=document.querySelector("form input").value,n=document.querySelector("span"),i=document.querySelector("input");if(""===t||e)n.style.opacity="1",i.classList.add("invalid");else{(n.style.opacity="1")&&(n.style.opacity="0"),i.classList.contains("invalid")&&i.classList.remove("invalid");(new s).shortenALink(t)}}}document.querySelector(".burgerMenu").addEventListener("click",()=>{document.querySelector(".burgerLinks").classList.toggle("active");document.querySelectorAll(".bar").forEach(e=>{e.classList.toggle("active")}),document.querySelector(".burgerMenu").classList.toggle("activeBurgerMenu")}),window.addEventListener("DOMContentLoaded",()=>{Object.entries(localStorage).forEach(e=>{const t=JSON.parse(e[1]).full_short_link,n=JSON.parse(e[0]);(new i).displayALink(n,t)})});(new o).init()}]);