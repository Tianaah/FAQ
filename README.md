# Frontend Mentor - FAQ Accordion Solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked.
- Navigate the questions and hide/show answers using keyboard navigation alone.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Screenshot of the FAQ accordion](./design/Faq%20img.PNG)

### Links

- **Solution URL:** [Add solution URL here](https://github.com/Tianaah/faq-accordion-main)
- **Live Site URL:** [Add live site URL here](http://127.0.0.1:5501/.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript for interactivity

### What I learned

During this project, I enhanced my skills in:

- Building interactive components using JavaScript (e.g., event listeners and DOM manipulation).
- Designing responsive layouts using **Flexbox** and **CSS Grid**.
- Implementing hover and focus states for better user experience.
- Improving accessibility by supporting keyboard navigation and adding ARIA attributes.

Here’s an example of the toggle logic I implemented for the accordion:

```js
const toggleMinusResponse = (index, selectedClassVisibility) => {
  minus.forEach((item, i) => {
    if (index == i) {
      selectedClassVisibility.className = "para hidden";
      item.className = "plus hidden";
      plus.forEach((item, i) => {
        if (i == index) {
          item.className = "minus pVisible";
        }
      });
      iconToggleResponse = false;
      // console.log(iconToggleResponse, "iconToggleResponse2-minus");
    }
  });
};

### Continued development

In future projects, I aim to:

- Explore JavaScript frameworks like React or Vue for similar components.
- Further optimize accessibility by testing with screen readers.
- Add animations for smoother transitions.

### Useful resources

- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) - Helped me learn how to make the FAQ accordion accessible.
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A great reference for building responsive layouts.
- [W3Schools - JavaScript Events](https://www.w3schools.com/js/js_events.asp) - Guided me in setting up event listeners.

## Author

- **Frontend Mentor Profile:** [@Tianaah](https://www.frontendmentor.io/profile/Tianaah)
- **GitHub Profile:** [@Tianaah](https://github.com/Tianaah)
- **Twitter Profile:** [@AkogwuTianaah](https://twitter.com/AkogwuTianaah)

## Acknowledgments

Special thanks to the Frontend Mentor community for their helpful feedback and support throughout the development process.
```
