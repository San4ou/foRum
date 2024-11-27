let reg_but = document.querySelector('#reg_but'),
    text = document.querySelector('#wasd')
   


document.querySelector('#reg_show').addEventListener('click', ()=>{
   document.querySelector('#aut').style.display = 'none'
   document.querySelector('#reg').style.display = 'block'
})
document.querySelector('#aut_show').addEventListener('click', ()=>{
   document.querySelector('#reg').style.display = 'none'
   document.querySelector('#aut').style.display = 'block'
})


reg_but.addEventListener('click', ()=>{
   
   let reg_name = document.querySelector('#reg_name'),
       reg_email = document.querySelector('#reg_email'),
       reg_pass = document.querySelector('#reg_pass'),
       asd = document.querySelector('#asd')
       text.innerHTML =''
   if(reg_name.value == ''|| reg_email.value == '' || reg_pass.value == ''  ){
      text.innerHTML = 'пустые поля'
   } 

    

})