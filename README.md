# Ripple Effect on Hover

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/ripple-hover-effect-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable HTML/CSS/JavaScript recreation of the button ripple effect shown in the supplied video.

## Run locally

No npm packages or build step are needed.

```bash
cd ripple-hover-effect
python -m http.server 8000
```

Open http://localhost:8000 in your browser, or open `index.html` directly.

## Files

- `index.html` — demo page with two ripple buttons
- `style.css` — gradient background, dark demo panel, pill buttons and expanding ripple animation
- `script.js` — restarts the ripple animation on click/tap

## Effect details

The ripple is a white circle that expands from the center of the button, from 0×0 to 500×500 pixels over 1 second while fading out. Hover and keyboard focus trigger the CSS animation; click/tap restarts it.

## Source note

The video shows readable portions of the HTML and CSS. This project recreates the visible behavior and styling, with a small JavaScript enhancement for click/tap support. It is not represented as a verbatim copy of the creator's full CodePen source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
