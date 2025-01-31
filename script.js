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


  const tabs = document.querySelectorAll('.elementor-tab-title');
  const contents = document.querySelectorAll('.elementor-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      const content = document.querySelector(`.elementor-tab-content[data-tab="${tabId}"]`);

      if (tab.classList.contains('active')) {
        tab.classList.remove('active');
        content.classList.remove('active');
      } else {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        content.classList.add('active');
      }
    });
  });
  