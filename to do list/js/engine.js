let addbutton = document.querySelector('#btn')
let putinfo = document.querySelector('#input-info')
let list = document.querySelector('#toDoContainer')

addbutton.addEventListener('click' , function(){
  var paraf = document.createElement('p');
  list.appendChild(paraf);
  paraf.innerHTML = putinfo.value;
  putinfo.value='';
  paraf.style.cursor='pointer';

  paraf.addEventListener('click' , function(){
    paraf.style.textDecoration='line-through';
  })
  paraf.addEventListener('dblclick' , function(){
    list.removeChild(paraf);
  })
})