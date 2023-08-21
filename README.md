# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview
This project is a space exploration website build with HTML markup, css styling and vanila Javascript for responsive ness. The website is responisve and can be used in a range of device with different viewports.
### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)



### Links


- Live Site URL: https://kenya-space-travel-agency.netlify.app/



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- vanila javascript



### What I learned

I learnt how to create a hamburger menu with functionality for mobile mode using html, css and javascript.

- [HTML]

<button class="hamburger-menu" aria-expanded="false"></button>

-[css]

  .nav-bar {
        background-color: hsl(0 0% 100% /0.1);
        position: fixed;
        backdrop-filter: blur(0.45rem);
        
       
        inset: 0 0 0 30%;
        margin-bottom: 0px;
        
        transform:translatex(100%);
        transition: transform 350ms ease-out;
        
       
    }
    .nav-bar[data-visible="true"]{
        transform:translatex(0%);
    }
    .hamburger-menu[aria-expanded="true"]{
        background: url(../starter-code/assets/shared/icon-close.svg);
    }

- [Javascript]
const mobileNav = document.querySelector(".nav-bar");

const navToggle = document.querySelector(".hamburger-menu");

navToggle.addEventListener("click", () => {

    const visibility = mobileNav.getAttribute("data-visible");
   
    if (visibility === "false") {
        mobileNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded","true");
    } else if (visibility === "true") {
        mobileNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});




### Continued development

I would like to continue horning my skill in javascript and learn javascript frameworks like React as well as APIs

### Useful resources

- [resource 1](https://www.freecodecamp.org/) - This helped me with javascript
- [resource 2](https://www.youtube.com/@KevinPowell) - This is an amazing youtube channel has some of the best tutorial 



## Author


Samuel Kinyua
- Twitter - [@muthuimkenya047](https://www.twitter.com/muthuimkenya047)
