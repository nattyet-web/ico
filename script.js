document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    // Show cookie consent popup
    cookieConsent.style.display = 'block';

    acceptCookies.onclick = function() {
        cookieConsent.style.display = 'none';
        // Here you can set a cookie or local storage to remember the choice if needed
    };

    declineCookies.onclick = function() {
        cookieConsent.style.display = 'none';
        // Here you can set a cookie or local storage to remember the choice if needed
    };

    // Function to generate random names
    function getRandomNames(count) {
        const names = [
            "David Ederson", "Hirut G/hiwot", "Edwardo", "Kalkidan seyfe", "Eva Lucas", "Veronica Franklin", "Grace Elijah", "Hannah james", 
            "Sebastian Samuel", "Benjamin Dominic", "Gwendolyn Caldwell", "Leo Benjamin", "Mia Isabella", "Nina jake ", "Oscar Theodore", "Paul jake", 
            "Quinn Harrington", "Ryan Sinclair", "Sophie Kensington", "Tom Montgomery", "Uma Abernathy", "Vera Nathaniel", "Will Silas", "Xena Vandermeer", 
            "Charlotte Yara", "Zack Timothy", "Amy Malcolm", "Brian Vincent", "Cathy", "Daniel", "Ella Benjamin", "Felix Elijah", 
            "Gina Abernathy", "Gabriella Henry", "Ivy Kensington", "Anastasia Jake", "Kara Jake", "Liam Worthington", "Molly Alexander", "Nate Jasper"
        ];
        return names.sort(() => 0.5 - Math.random()).slice(0, count);
    }

    // Display names in the sidebar
    const nameList = document.querySelector('.name-list');
    const randomNames = getRandomNames(40);
    randomNames.forEach(name => {
        const nameItem = document.createElement('div');
        nameItem.classList.add('name-item');
        nameItem.textContent = name;
        nameList.appendChild(nameItem);
    });

    // Quote rotation
    const quotes = document.querySelectorAll('.quote');
    let currentIndex = 0;

    function showNextQuote() {
        quotes[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % quotes.length;
        quotes[currentIndex].classList.add('active');
    }

    setInterval(showNextQuote, 5000); // Change quote every 5 seconds
});



window.addEventListener("load", function() {
    console.log('All resources finished loading!');
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.classList.add("hide-preloader");
    }
});
