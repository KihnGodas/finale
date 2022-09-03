
var des = document.getElementById('des')
var spec = document.getElementById('spec')
var description = document.querySelector('.description');
var specification = document.querySelector('.specification')
des.addEventListener('click',function(){
   if(description.style.display ==='none'){
    description.style.display ='block'
    description.style.animation = 'showDiv 1s'
   }
   else{description.style.animation = 'hideDiv 1s';
    setTimeout(() => {
        description.style.display = 'none'
    }, 1000);
   }
})
spec.addEventListener('click',function(){
    if(specification.style.display ==='none'){
        specification.style.display ='block'
        specification.style.animation = 'showDiv 1s'
    }else{
        specification.style.animation = 'hideDiv 1s';
    setTimeout(() => {
        specification.style.display = 'none'
    }, 1000);
    }
})
