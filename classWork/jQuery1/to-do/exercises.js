// mouseenter mouseleave
$('#btn').css({
  'background-color': 'red',
  'color' : 'white',
  'font-size': '32px',
  
});

$(document).ready(function() {
  $('#btn').on('mouseenter mouseleave', function(event) {
      if(event.type === 'mouseenter') {
      $('#btn').html('Welcome! stay forever');
      } else {
          $('#btn').html('Don\'t leave this way');
      }
  })
})

//Create a drop down menu
let movies = document.getElementsByClassName('movies');
let actors = document.getElementsByClassName('actors')
let p=actors[0];
for (let i =0;i<movies.length;i++ ){
  
  movies[i].addEventListener('click',()=>{
      actors[i].classList.toggle('active');
      
          if(p!= actors[i]){ 
              p.classList.remove('active')
              p= actors[i]}
     
      
     
  })
  
}


// TODO list

let input = document.getElementById('input')
let addBtn= document.querySelector('.addBtn')
let container = document.querySelector('.container')

class item{
  constructor(myTask){
      this.createDiv(myTask);
  }
  createDiv(myTask){
      let inputValue = document.createElement('input');
      inputValue.value= myTask;
      inputValue.disabled= true;
      inputValue.classList.add('task');
      inputValue.type= 'text';

      let itemBox = document.createElement('div');
      itemBox.classList.add('item')

      let editBtn = document.createElement('button');
      editBtn.innerHTML= 'EDIT';
      editBtn.classList.add('editBtn');

      let removeBtn = document.createElement('button');
      removeBtn.innerHTML='REMOVE'
      removeBtn.classList.add('removeBtn')

      container.appendChild(itemBox);
      itemBox.appendChild(inputValue);
      itemBox.appendChild(editBtn)
      itemBox.appendChild(removeBtn)

      editBtn.addEventListener('click',()=>this.edit(inputValue));
      removeBtn.addEventListener('click',()=>this.remove(itemBox))

  }
   edit(x){
      x.disabled= !x.disabled
  } 
  remove(itemBox){
      container.removeChild(itemBox)
  }
}
new item('Do Exercises')

function addTask(){
  if(input.value!=''){
      new item(input.value);
      input.value='';
  }
}

addBtn.addEventListener('click',addTask)