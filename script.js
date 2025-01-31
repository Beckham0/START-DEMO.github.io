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