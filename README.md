<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align="center">

# Portfolio Website

</div>
<!-- TABLE OF CONTENTS -->
<div align="left">
<!-- ABOUT THE PROJECT -->

![Product Name Screen Shot][product-screenshot]

A single-page portfolio website built from scratch using only HTML, CSS and Javascript. It features fade-in on-scroll animations, an SVG spritesheet for every logo used on the page and a mindful approach to keep the site accessible through semanitc labeling.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Live Website

[Portfolio Website][portfolio-website]

## Features

* **Responsive Design**: The layout fluidly adapts to phone, tablet and desktop screen sizes
* **Graceful Degradation**: The website's core content is fully accessible even if JavaScript is disabled.
* **On-Scroll Animations**: Elements fade and slide into view as the user scrolls, powered by the efficient IntersectionObserver API.
* **Smooth Navigation**: The navigation menu has a smooth expand/collapse animation for mobile viewports, and the active navigation link is highlighted automatically based on the user's scroll position.
* **SVG Sprite Logos**: All logos are stored in a single icons.svg file and accessed through the `<use>` syntax in the HTML for a improved performance.
* **Accessible Markup**: The site uses semantic HTML and ARIA attributes for a better experience for users of assistive technologies.
* **Light and Dark themes**: The theme respects the system-level preference for a light or dark theme and can be manually be toggled with a button.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies used

* ![HTML][HTML]
* ![CSS][CSS]
* ![JS][JS]
* [Iconify][Iconify] for SVG logos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

You may clone this repo to use is as a template and replace it with your own information.

```bash
git clone https://github.com/DaniJGP/portfolio
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- ROADMAP -->

## Roadmap

* [X] Dark/Light theme toggler
* [ ] Transition to using 11ty for generating HTML
  * [ ] Add blogging capabilities
  * [ ] Add Spanish language version

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE] for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- ACKNOWLEDGMENT -->

## Acknowledgments

Emoji artwork is provided by [Emojitwo], originally released as [Emojione 2.2][Emojione] by [Ranks.com] with contributions from the Emojitwo community and is licensed under [CC-BY 4.0][CC-BY-40].

<!-- CONTACT -->
## Contact

[![email][email]][email-url] [![x.com][x-shield]][x-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[portfolio-website]: https://danijgp.github.io
[LICENSE]: https://github.com/DaniJGP/portfolio/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/daniela-guardia-3425bb317/
[product-screenshot]: assets/img/portfolio-d1.jpg
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS]: https://img.shields.io/badge/css-663399?style=for-the-badge&logo=css
[JS]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Repomix]: https://github.com/yamadashy/repomix
[Iconify]: https://iconify.design/
[Emojitwo]: https://emojitwo.github.io/
[Emojione]: https://www.emojione.com/
[Ranks.com]: http://www.ranks.com/
[CC-BY-40]: https://creativecommons.org/licenses/by/4.0/legalcode
[email]: https://img.shields.io/badge/d.guardiaprado%40gmail.com-white?style=flat&logo=gmail
[email-url]: mailto:d.guardiaprado@gmail.com
[x-shield]: https://img.shields.io/badge/dani__jgp-black?style=flat&logo=x
[x-url]: https://x.com/dani_jgp
