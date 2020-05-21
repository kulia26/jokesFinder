const animate = () => {
  //animate favourite aside 
  const menuInput = document.getElementById('menu');
  menuInput.addEventListener('change', (event)=>{
    const wrap = document.querySelector('.wrap');
    const aside = document.getElementsByTagName('aside')[0];
    let button = document.querySelector('div.menu');
    if(event.target.checked){
      setTimeout(()=>{
        aside.appendChild(menuInput)
        aside.appendChild(button);
      }, 550)
    }else{
      wrap.appendChild(menuInput)
      wrap.appendChild(button);
      menuInput.checked = true
      setTimeout(()=>{
        menuInput.checked = false;
      }, 20)
    }
    
    aside.classList.toggle('show');
    aside.classList.toggle('hide');
    document.body.classList.toggle('blur-show');
    document.body.classList.toggle('blur-hide');
  });

}

window.onload = animate;