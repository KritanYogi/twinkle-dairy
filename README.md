# Twinkle Dairy

A modern, responsive website built for **Twinkle Dairy** to present its dairy products, company information, gallery, and contact details through a clean and user-friendly web experience.

## Overview

Twinkle Dairy is a business website designed to provide customers with an easy way to explore the company's products, learn more about the brand, view its gallery, and get in touch.

The project focuses on a clean visual design, responsive layouts, reusable components, and a smooth browsing experience across desktop and mobile devices.

## Features

* Responsive design for desktop, tablet, and mobile
* Modern and clean user interface
* Product showcase
* Product information sections
* Image gallery
* Company information
* Contact page
* Responsive navigation
* Footer with relevant website links
* Privacy Policy page
* Terms & Conditions page
* Custom error page
* Custom 404 / Not Found page
* SEO-friendly sitemap
* Robots configuration
* Reusable React components
* TypeScript-based development

## Tech Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

### Development Tools

* **Node.js**
* **npm**
* **ESLint**

## Project Structure

```text
twinkle-dairy/
│
├── app/                    # Application routes and pages
│   ├── contact/            # Contact page
│   ├── gallery/            # Gallery page and gallery components
│   ├── privacy-policy/     # Privacy policy page
│   ├── terms/              # Terms and conditions page
│   ├── error.tsx           # Error page
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # Robots configuration
│   ├── sitemap.ts          # Sitemap configuration
│   └── ...
│
├── components/             # Reusable UI components
│   ├── contact/
│   ├── gallery/
│   ├── hero/
│   ├── layout/
│   ├── products/
│   └── ...
│
├── data/                   # Website data
├── lib/                    # Utility functions
├── public/                 # Static assets and images
├── types/                  # TypeScript type definitions
│
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm

You can verify your installation with:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone https://github.com/KritanYogi/twinkle-dairy.git
```

Move into the project directory:

```bash
cd twinkle-dairy
```

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

The development server will automatically reload when you make changes to the source code.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the application using the production build.

### Lint

```bash
npm run lint
```

Runs the project's ESLint checks.

## Environment Variables

If the project requires environment variables, create a local `.env.local` file in the project root.

Example:

```env
# Add required environment variables here
```

> Never commit `.env`, `.env.local`, or other files containing private credentials, API keys, passwords, or other sensitive information.

## Deployment

This project can be deployed using platforms that support Next.js applications.

Before deploying:

1. Install dependencies.
2. Configure required environment variables.
3. Create a production build.
4. Deploy the application.

For production builds, run:

```bash
npm run build
npm run start
```

## Development Notes

The project follows a component-based architecture so that common interface elements can be reused throughout the application.

Pages and routes are organized inside the `app` directory, while reusable UI elements are maintained inside `components`.

Static assets such as images and other public resources are stored in the `public` directory.

## Future Improvements

Potential future improvements include:

* Product search and filtering
* Product detail pages
* Online ordering functionality
* Customer inquiry form integration
* Content management system integration
* Improved SEO metadata
* Performance optimization
* Analytics integration
* Admin dashboard
* Customer reviews and testimonials

## License

This project was developed for **Twinkle Dairy**.

---

## Author

**Kritan Yogi**

GitHub: [@KritanYogi](https://github.com/KritanYogi)

---

## Project Repository

https://github.com/KritanYogi/twinkle-dairy
