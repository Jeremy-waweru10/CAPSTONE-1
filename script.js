function onSubmit (){
    alert ('Form submitted successfully');
    return true;
}

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
        });

    function welcomeMsg(name) {
        name = "Customer"
        alert ("Hello" + name + "!" + "welcome to our website");
    }

    function cart(name) {
        name = "Customer"
        alert ("Added to cart!");
    }

        
   