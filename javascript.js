const section=document.querySelectorAll('section')
const ShowDev=document.getElementById('ShowDev')
const listItems=document.querySelectorAll('#listItems')

const devdetails=["Frontend Developer","Backend Developer","Full Stack Developer"]
let value=1
setInterval(()=>{
  if(value<devdetails.length-1){
     ShowDev.innerHTML=devdetails[value]
     value++
  }
  else{
    ShowDev.innerHTML=devdetails[value]
    value=0
  }
  
},5000)

// window.scrollTo({
//     top:0,
//     behavior:'smooth'
// })

// listItems.forEach((list)=>{
//   list.addEventListener('click',(e)=>{
//     listItems.forEach((item)=>{
//         item.classList.remove('active')
//     })
//     list.classList.add('active')

//       console.log(window.location.hash);
//   })
// })
const hash=window.location.hash
const activeRemove=()=>{
    listItems.forEach((item)=>{
        item.classList.remove('active')
    })
}
const addActive=(index)=>{
    listItems[index].classList.add('active')
}
switch (true) {
    case hash=='#home':
        activeRemove()
        addActive(0)
        break;
    case hash=='#about':
        activeRemove()
        addActive(1)
        break;
    case hash=='#services':
        activeRemove()
        addActive(2)
        break;
    case hash=='#portfolio':
        activeRemove()
        addActive(3)
        break;
    case hash=='#contact':
        activeRemove()
        addActive(4)
        break;

    default:
        break;
}

// Create Scroll Animation
// window.scrollTo
window.onscroll=(e)=>{
   
     section.forEach((set)=>{
        let top=window.scrollY
        let offset=set.offsetTop-100
        let height=set.offsetHeight
        let id= `#${set.getAttribute('id')}`
        console.log(id);
        
        // console.log("top:"+top);
        // console.log("offset:"+offset);
        // console.log("height:"+height);
        // console.log(height);
        if(top>=offset && top<offset+height){
           listItems.forEach((list)=>{
            list.classList.remove('active')
            if(id==list.attributes[1].nodeValue){
                console.log('hi');
                
                list.classList.add('active')
            }
            
           })
            
            set.classList.add('showAnimation')
        }
        else{
            set.classList.remove('showAnimation')
        }
        
        
    })
}