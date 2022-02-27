# [Leave Ukraine](https://leaveukraine.com/) Info Guide

## Project Board [Here](https://github.com/orgs/Ukraine-Relief-Efforts/projects/1/views/4)

[![CI Workflow Status](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions/workflows/ci.yml/badge.svg)](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions)
[![Deployment Status](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions/workflows/deploy-to-production.yml/badge.svg)](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions)

The frontend repo for the Leave Ukraine Info Guide.

## Adding New Languages

The translation files are located in `public/locales/`. You can simply copy
one of the other languages and update the translations as needed.

When adding a new language, you also need to add it to the list of locales in
`i18next-parser.config.js` and to the language picker in
`src/Components/NavBar/LanguagePicker.js` (if you don't know how to do
this then just create a pull request anyway and the reviewer can handle it).

## Creating a PR

Please base your work off of the `main` branch, and target your PR at `main`
when you're finished.

## Deploying to Production

Simply merge `main` into `production` and it will be automatically deployed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run update-translations`

Parses the code and extracts new translatable strings into the json files.

### `npm test`

We haven't got any test yet!

