/* Deters casual image saving — right-click + drag. NOT foolproof (see site notes). */
document.addEventListener('contextmenu',function(e){
  if(e.target.closest('img,.bg,.lightbox,.ev img,figure.cover')) e.preventDefault();
},true);
document.addEventListener('dragstart',function(e){
  if(e.target.tagName==='IMG') e.preventDefault();
},true);
