;(function(){
            //Вызов саблиста
    
        const subBtn = document.querySelector('.with-sublist');
        const sublist = document.querySelector('.sublist');
    
        if (sublist) {
            subBtn.addEventListener('click', ()=> {
                sublist.classList.toggle('active');
            })
        }
    
        //Вызов меню 
    
        const burgerBtn = document.querySelector('.menu__burger');
        const mobileMenu = document.querySelector('.mobile-menu');
    
        burgerBtn.addEventListener('click', () => {
            
            document.body.classList.toggle('_lock');
            mobileMenu.classList.toggle('active');
            burgerBtn.classList.toggle('active');
        })
       
    
    


    // Плавный скролл до меню

    const menuLinks = document.querySelectorAll('.link[data-goto]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                if(burgerBtn.classList.contains('active')) {
                    burgerBtn.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.classList.remove('_lock');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

})();