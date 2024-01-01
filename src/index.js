import {loadpage }  from './initialPageLoad';
import { loadMenuPage } from './menuPage';
import { loadContactUspage } from './contactUsPage';


document.addEventListener('DOMContentLoaded', () => {
    loadpage();
    loadContactUspage();
    loadMenuPage();
    hideWebsites(true, false, true);

    document.querySelectorAll('.home-page').forEach(element => {
        element.addEventListener('click', () => {
            //hideWebsites(false, true, true);
            hideWebsites(true, false, true);
        });
    });
    document.querySelectorAll('.contact-page').forEach(element => {
        element.addEventListener('click', () => {
            //hideWebsites(true, false, true);
            hideWebsites(true, true, false);
        });
    });
    document.querySelectorAll('.menu-page').forEach(element => {
        element.addEventListener('click', () => {
            hideWebsites(false, true, true);
        });
    });

    /*document.getElementsByClassName('home-page').addEventListener('click', () => {
        hideWebsites(true, false, false);
    });
    document.getElementsByClassName('contact-page').addEventListener('click', () => {
        hideWebsites(false, true, false);
    });
    document.getElementsByClassName('menu-page').addEventListener('click', () => {
        hideWebsites(false, false, true);
     });*/
});

//makes sure hidden is not applied
function hideWebsites(home, contact, menu) {
    removeClass();
    console.log('after removing');

    // Get collections of elements with the specified classes
    const menuPages = document.querySelectorAll('.menupage');
    const contactPages = document.querySelectorAll('.contactpage');
    const homePages = document.querySelectorAll('.homepage');

    // Iterate through each collection and apply changes
    menuPages.forEach(page => {
        if (home === true) {
            page.classList.add('hidden');
        }
    });

    contactPages.forEach(page => {
        if (menu === true) {
            page.classList.add('hidden');
        }
    });

    homePages.forEach(page => {
        if (contact === true) {
            page.classList.add('hidden');
        }
    });
}

function removeClass() {  
    const ele_var = document.querySelectorAll('div');  
    ele_var.forEach((element) => {  
    element.classList.remove('hidden');
    console.log(element)  
    }); 
}  