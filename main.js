var navbar = document.getElementById('navbar')
var burguer = document.getElementById('burguer')
const navList = document.querySelectorAll('ul li')


burguer.addEventListener('click', function(){
          navbar.classList.toggle('active')
})

for(let i = 0; i < navList.length; i++){
  navList[i].addEventListener('click', function(){
       navbar.classList.remove('active')
  })
}

const controls =  document.querySelectorAll('.control')
let currentItem =  0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach(control => {
  control.addEventListener('click', () => {
    const isleft = control.classList.contains('arrow-left')
   
    if(isleft){
      currentItem -= 1
    }else{
      currentItem += 1
    }

    if(currentItem >= maxItems){
      currentItem = 0
    }
    if(currentItem < 0){
           currentItem = maxItems -1
    }

   items.forEach((item) => item.classList.remove("current-item"))

   items[currentItem].scrollIntoView({
    inline: "center",
    behavior: "smooth",
    block: "nearest"
   })
});
})
