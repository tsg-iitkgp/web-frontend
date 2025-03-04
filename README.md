
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tsg-iitkgp/web-frontend">
    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/86282911/293505563-4c4ecabf-bbee-4cc3-86bc-0500f890f867.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA/20231231/us-east-1/s3/aws4_request&X-Amz-Date=20231231T123604Z&X-Amz-Expires=300&X-Amz-Signature=a3645b7ca15972407adbba4131f12f86922a5213688aaacb05db73d6ff60d213&X-Amz-SignedHeaders=host&actor_id=86282911&key_id=0&repo_id=406055266" alt="Logo" width="80" height="80">
  </a>


  <h3 align="center">
    TSG Site Frontend
  </h3>

  <p align="center">
    <!-- <a href="https://github.com/tsg-iitkgp/web-frontend"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <!-- <a href="https://github.com/tsg-iitkgp/web-frontend">
    View Demo
    </a>
    · -->
    <a href="https://github.com/tsg-iitkgp/web-frontend/issues">
    Report Bug
    </a>
    ·
    <a href="https://github.com/tsg-iitkgp/web-frontend/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details>

<summary>
Table of Contents
</summary>

- [Development](#development)
  - [Libraries/Frameworks Used](#librariesframeworks-used)
  - [File Structure](#file-structure)
  - [Setting Up Locally](#setting-up-locally)
    - [Bare metal](#bare-metal)
    - [Docker](#docker) 
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [Additional Documentation](#additional-documentaiton)

</details>

<!-- Development -->
## Development

#### Libraries/Frameworks Used

This project has been built with the following technologies.

- [React](https://reactjs.dev)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://github.com/remix-run/react-router)

#### File Structure

```
.
├── public
└── src
   ├── components
   ├── data
   ├── images
   ├── pages
   ├── routes
   ├── styles
   └── App.js
```

- `public`: Contains public files such as `index.html`.
- `src`: Contains source files (JS, CSS, assets, etc.)
  - `components`: Contains reusable react components.
  - `data`: Contains raw data.
  - `images`: Contains images and icons.
  - `pages`: Contains all pages.
  - `routes`: Contains custom routes.
  - `styles`: Contains all stylesheets (CSS).
  - `utils`: Contains commonly used util functions.
  - `App.js`: Contains the top-level `App` component.

#### Setting Up Locally

It is prefferred to use docker over bare metal setup.

##### Docker

- Install [docker](https://www.docker.com/get-started) and `docker-compose`. For ubuntu, follow the comamnds below:
  ```sh
  sudo apt install docker.io docker-compose
  ```
- Start the container using `docker-compose.yml` file
  ```sh
  sudo docker-compose up -d
  ```
- The site will be hosted at `http://localhost:8000`

##### Bare Metal
- Install [NodeJS](https://nodejs.org/en)
- Install or enable [Yarn](https://yarnpkg.com/getting-started/install)
- Clone this repository
- Run `yarn install` in the cloned repository to download all dependencies
- Run `yarn start` to start a local development server
- The site will be hosted at `http://localhost:3000`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

> [!Note]
> For any ideas, suggestions or queries regarding the website, mail us at <tech.coordi@iitkgp.ac.in>

#### Present Technology Coordinator(s)

Name|Email|Phone No.
-----|-----|---------
[Harsh Bansal](https://www.harshbansal.in) | <harshbansal.iitkgp@gmail.com> | +91-9821391634
[Akash Manna](https://github.com/AkashManna2003) | <mannaakash.iitkgp@gmail.com> | +91-82829101570

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)

<p align="right">(<a href="#top">back to top</a>)</p>

## Additional Documentation

- [Changelogs](/.github/CHANGELOG.md)
- [License](/LICENSE)
- [Security Policy](/.github/SECURITY.md)
- [Code of Conduct](/.github/CODE_OF_CONDUCT.md)
- [Contribution Guidelines](/.github/CONTRIBUTING.md)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/tsg-iitkgp/web-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/tsg-iitkgp/web-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/tsg-iitkgp/web-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/tsg-iitkgp/web-frontend/issues
[license-shield]: https://img.shields.io/github/license/tsg-iitkgp/web-frontend.svg?style=for-the-badge
[license-url]: https://github.com/tsg-iitkgp/web-frontend/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/technology-students-gymkhana-iit-kharagpur/
