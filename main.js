/* hamburger*/
let menuBtn = document.getElementById('menu-btn');

let menu = document.getElementById('menu');

let closeBtn = document.getElementById('menu-close-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});




window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    
    document.getElementById('go-back').style.display = "block"
    
  } else {
    document.getElementById('go-back').style.display = "none"

  }
}

document.getElementById("go-back").onclick = function () {
  
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* gt year for copywrit*/
document.getElementById('year').textContent = new Date().getFullYear();


setTimeout(function() {
  let ads = document.getElementById('advertisement');
  
  ads.style.display = "block";
  
  setTimeout(function () {
    ads.style.display = "none"
  },6000)
},2000);
