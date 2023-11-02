# Keycap Demo

**Live Demo:** [Link](https://delightful-tartufo-c56239.netlify.app/)

Keycap Demo is a website designed to easily add, find, and display custom keycap information.

- Displays:
  - Designer
  - Dates: Group buy and shipped dates
  - Description
  - Available kits and images
  - Colors
  - Pricing
  - Any available extras with images (deskmats, renders, and collabs)
- Search keycaps via theme (e.g., dark or light) and color (e.g., blue, beige, etc.).
- Utilizes the view transitions API (currently only viewable on Google Chrome).

![Demo Gif](https://github.com/aladores/keycap-demo/blob/main/readme_assets/gif.gif)

## Why I Made This

In the custom mechanical keyboard hobby, finding information about a specific keycap set can be difficult. Information is spread across different sources, and finding a specific keycap set can take a long time. There is also no standard way of presenting information.

## Built With

- **Astro.js**

  - **Static Site Generation**: The majority of the website's content is static and doesn't require frequent updates. A static site generator allowing pre-rendered pages, resulting in faster loading times.

  - **Interactive UI Components**: Some interactive UI components were necessary, and integrating them with other UI frameworks is straightforward. In this case, we used Preact to implement features like the header and image carousels without sacrificing performance.

  - **Performance Optimization**: Deliver only the necessary JavaScript needed for each page to minimize load times, as the majority of the bandwidth is allocated for images and other information.

- **Preact**
  - **Optimized for Performance**: Preact is a lightweight alternative to React that delivers excellent performance, ensuring the website remains fast and responsive. React's more advacended features and eco system were not necessary.

## Credits

- Inspired and some information retreived by:
  - [Keycaps info From Matrix](https://matrixzj.github.io/)
  - [KeycapLendar](https://keycaplendar.firebaseapp.com/)
- Svgs:
  - [iconmonstr](https://iconmonstr.com/)

## Features I Would Like to Add

- Support for more keycap brands
- A method to favorite items
- Dark mode
- Click to expand image to a larger modal
