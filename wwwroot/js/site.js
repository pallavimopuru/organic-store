// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const navItems = document.querySelector('.navbar-nav');

navItems.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        const links = navItems.querySelectorAll('.nav-link');
        links.forEach(link => link.classList.remove('after-click'));
        event.target.classList.add('after-click');
        sessionStorage.setItem('clickedLinkId', event.target.id);
    }
});
// Check if a link ID is stored in local storage
const clickedLinkId = sessionStorage.getItem('clickedLinkId');
if (clickedLinkId) {
    const clickedLink = document.getElementById(clickedLinkId);
    clickedLink.classList.add('after-click');
} else {
    const homelink = document.getElementById('homeLink');
    homelink.classList.add('after-click');
}


//pop in array it will pop last element and return

//push const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Kiwi");  //5 return
//fruits.pop();  //Mango