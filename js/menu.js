const hmenu = document.querySelector('.menu')
const menu = document.querySelector('.menu-navegacion')

console.log(hmenu)
console.log(menu)


hmenu.addEventListener('click', ()=>{
  menu.classList.toggle("spread")

})

window.addEventListener('click', e=>{
    if (menu.classList.contains ('spread')
 && e.target !=menu   && e.target !=hmenu  ) {
        
             menu.classList.toggle('spread')
    }
})

