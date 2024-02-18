import{i as d,a as b,S}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n={formBlock:document.querySelector(".form-block"),formElem:document.querySelector(".form-elem"),formInput:document.querySelector(".form-input"),formBtn:document.querySelector(".form-btn"),loader:document.querySelector(".loader-block"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".load-btn")};function w(t){d.error({message:`Sorry, there are no images matching
 your search query. Please try again!`,position:"topRight"})}function I(t){d.show({message:"You have not entered what to search for",position:"topRight"})}function v(t){d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}const m={onError:w,onShow:I,onInfo:v};function E(){n.loader.classList.remove("hidden")}function q(){n.loader.classList.add("hidden")}const c={on:E,off:q};async function p(t,o){c.on();const s="42281278-b9f49de06a3dfc9ed42173e47",a="https://pixabay.com",e="/api/";return(await b.get(a+e,{params:{key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}let B=new S(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250});function g(t){const{largeImageURL:o,webformatURL:s,tags:a,likes:e,views:r,comments:l,downloads:L}=t;return`
    <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${a}"
      />
    </a>
    <div class="modal-info">
      <p>Likes <span class="gallery-info">${e}</span></p>
      <p>Views <span class="gallery-info">${r}</span></p>
      <p>Comments <span class="gallery-info">${l}</span></p>
      <p>Downloads <span class="gallery-info">${L}</span></p>
    </div>
  </li>`}function R(t){(!t.hits||t.hits.length===0)&&m.onError(),t.totalHits;const o=t.hits.map(g).join("");n.gallery.insertAdjacentHTML("beforeend",o),B.refresh()}const h={imagesMarkupRef:g,renderImage:R};function y(){i>=u?n.loadBtn.classList.add("hidden"):n.loadBtn.classList.remove("hidden")}let i,u,f;async function P(t){if(t.preventDefault(),f=n.formInput.value.trim(),i=1,f==="")return m.onShow();c.on();try{const o=await p(f,i);u=Math.ceil(o.totalHits/15),n.gallery.innerHTML="",h.renderImage(o)}catch{m.onError()}finally{c.off(),y(),t.target.reset()}}async function O(){i+=1,c.on();const t=await p(f,i);h.renderImage(t),y(),c.off(),i>=u&&m.onInfo();const s=n.gallery.lastElementChild.getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}n.formElem.addEventListener("submit",P);n.loadBtn.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
