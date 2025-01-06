const menu=document.getElementById('menu')
const Body=document.getElementById('Body')
const mobileNavbar=document.getElementById('mobile_navbar')

menu.addEventListener('click',()=>{
    Body.classList.toggle('menuShow')
})

console.log();

setInterval(()=>{
if(window.outerWidth>660){ 
    Body.classList.remove('menuShow')
}
},1000)
