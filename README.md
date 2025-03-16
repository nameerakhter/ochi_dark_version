# ochi dark version

https://github.com/nameerakhter/ochi_dark_version/assets/120779958/158a64f3-fa9f-4509-869b-213697b0bb60

This repository contains the dark version of the website [ochi.in.design](https://ochi.design/).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster development experience for modern web projects.
- **Tailwind CSS**: A CSS framework for rapidly building custom designs.
- **Locomotive Scroll**: A simple scroll library that provides smooth scrolling, parallax effects, and more.
- **Framer Motion**: An animation library for React that powers production-ready animations.

## Highlights

### PLayful Eyes

https://github.com/nameerakhter/ochi_dark_version/assets/120779958/c2e6cd28-e0ca-4ac6-92d0-6531177a9ffa

![code](https://github.com/nameerakhter/ochi_dark_version/assets/120779958/4d3eb6bb-e815-4163-94d0-a6d1987575d3)

**How it was made:**

- For the eyes to look more playful and rotate according to the cursor I used the following logic
  - An event listener is added for mouse movement.
  - When the mouse moves, the current X and Y coordinates of the mouse are captured.
  - The difference between the mouse's X and Y coordinates and the center of the window's width is calculated.
  - Using these differences, the angle of rotation is determined using the arctangent function.
  - The calculated angle is then set as the rotation value for the eyes.

### Highlight 2: Dynamic text_hover

https://github.com/nameerakhter/ochi_dark_version/assets/120779958/707150a0-6f1b-4b7e-9e0f-8941ad47f44e

**How it was made:**

- For the cards to look a little more dynamic this feature is added which changes the text on hover
  - When hovering over a card, the name of the card is displayed with an animation.
  - When hovering over a card, the name of the card is displayed with an animation.
  - The text animation uses Framer Motion for smooth transitions and delay for a staggered effect.
