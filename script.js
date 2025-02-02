const swiper = new Swiper('.slider-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });


  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.elementor-tab-title');
    const contents = document.querySelectorAll('.elementor-tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
  
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
  
        tab.classList.add('active');
        contents.forEach(content => {
          if (content.dataset.tab === tabId) {
            content.classList.add('active');
          }
        });
      });
    });
  });

  const chaty = document.getElementById('chaty')
  const cancel = document.getElementById('cancel')
  const line = document.getElementById('line')
  const call = document.getElementById('call')

  chaty.addEventListener('click', () =>{

    chaty.style.opacity = 0; 
    cancel.style.opacity = 1; 
    call.style.opacity = 1; 
    line.style.opacity = 1; 

    cancel.style.zIndex = 2; 
    chaty.style.zIndex = 1; 
    // call.style.zIndex = 2; 
    // line.style.zIndex = 2; 

    cancel.style.transform = "rotate(0deg)"; 
    chaty.style.transform = "rotate(360deg)"; 
    
    call.style.bottom= "165px"; 
    line.style.bottom= "105px";  
    
  });
  cancel.addEventListener('click', () =>{

    chaty.style.opacity = 1; 
    cancel.style.opacity = 0; 
    call.style.opacity = 0.3; 
    line.style.opacity = 0.3;

    cancel.style.zIndex = 1; 
    chaty.style.zIndex = 2; 
    
    chaty.style.transform = "rotate(0deg)"; 
    cancel.style.transform = "rotate(-360deg)"; 

    call.style.bottom= "46px"; 
    line.style.bottom= "46px"; 
  });