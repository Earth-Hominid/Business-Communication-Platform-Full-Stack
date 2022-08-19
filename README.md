# Business Communication Platform | Full Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<img width="988" alt="Screen Shot 2022-08-18 at 9 18 40 AM" src="https://user-images.githubusercontent.com/66766688/185407806-9d71b8dd-11cc-403a-9a8a-3864bb887c57.png">

The goal of this application is to provide businesses with an easy to use web application where management can provide business reports for executives and online training material for their employees.

Click here for the [live demo](https://rbsdocsfrontend.vercel.app). (The application will take a few seconds to start from sleep, as the back end is hosted on the free heroku plan.)

The repository for the back-end can be found [here](https://github.com/Earth-Hominid/docs-backend).

## Description

This full-stack application is demo of an application that was built to allow small businesses to create educational material, reports and to share sensitive information among the mangement team.

The application was built with authentication in order to  provide several authorization layers for users. 

### Frontend

The front-end is written in TypeScript and built with the NextJS framework and React functional components.

Tailwind CCS was combined with Styled-Components. Every React functional component has its own separate styled-component tailwind file. This allows extremely fast ui changes without compromising code quality. Tailwind was chosen due to its ease of use and its effectiveness in providing a mobile first design that can be easily adjusted for wide screen monitors. 

Authenticated users can be upload, store, and manage images using either the front end or back end CMS. The SAAS product, Cloudinary, is utilized to provide this functionality.

Pagination and search functionality was implemented using Strapi's API and filtering fetches.  

### Authentication

NextJS allows the JSON Webtoken to be stored server side, which is a great feature and negates the typical security risks when the Webtoken is stored client side.

Visitors to the website can only access public articles. Once a user is authenticated, they will be granted access to reports published by other authenticated users. They have access to their own personal dashboard where they can create and edit articles and reports. Articles will be published publicly, whereas reports are published privately. 

#### Public User View 

<img width="363" alt="Screen Shot 2022-08-18 at 9 26 35 AM" src="https://user-images.githubusercontent.com/66766688/185410555-8050720d-17b3-49d8-aaff-543c676a6ef9.png">


#### Private User View 

<img width="444" alt="Screen Shot 2022-08-18 at 9 27 30 AM" src="https://user-images.githubusercontent.com/66766688/185410592-5498ce0c-9328-4316-a041-2249bb24ced2.png">


### Backend

The backend is written in JavaScript and built with the Strapi framework.

### Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [HeroIcons](https://heroicons.com/)
- [Tailwind-Styled-Components](https://github.com/MathiasGilson/Tailwind-Styled-Component)
- [Typescript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/)
- [Eslint](https://eslint.org/)
- [PostCSS](https://postcss.org/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Cloudinary](https://cloudinary.com/)
