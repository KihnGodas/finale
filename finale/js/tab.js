
var btn = document.querySelector('.btn');
var description = document.querySelector('.description');
btn.addEventListener('click',function(){
   if(description.style.display ==='none'){
    description.style.display ='block'
    description.style.animation = 'showDiv 1s'
   }
   else{
    description.style.display='none'
    description.style.animation = 'hideDiv 1s'
   }
})
btn.addEventListener('click',function(){
    specification.style.animation = 'showDiv 1s'
})