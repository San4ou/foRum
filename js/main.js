document.querySelector('#reg_show').addEventListener('click', ()=>{
   document.querySelector('#aut').style.display = 'none'
   document.querySelector('#reg').style.display = 'block'
})
document.querySelector('#aut_show').addEventListener('click', ()=>{
   document.querySelector('#reg').style.display = 'none'
   document.querySelector('#aut').style.display = 'block'
})