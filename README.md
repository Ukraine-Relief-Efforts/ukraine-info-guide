# [Leave Ukraine](https://leaveukraine.com/) Info Guide

## Project Board [Here](https://github.com/orgs/Ukraine-Relief-Efforts/projects/1/views/4)

[![CI Workflow Status](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions/workflows/ci.yml/badge.svg)](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions/workflows/ci.yml)
[![APi Sanity Check Status](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions/workflows/api-sanity-check.yml/badge.svg)](https://github.com/Ukraine-Relief-Efforts/ukraine-info-guide/actions/workflows/api-sanity-check.yml)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=ukraine-info-guide)

This guide contains information about survival, opened borders, the required documents to cross said borders. It's a global website on which all valuable information will be held for Ukrainian refugees.


## Adding New Languages

The translation files are located in `public/locales/`. You can simply copy and
rename the `en` folder and update the translations as needed.

When adding a new language, you also need to add it to the list of locales in
`configs/languages.js` (if you don't know how to do this then just create a
pull request anyway and the reviewer can handle it).

## Creating a PR

Please base your work off of the `main` branch, and target your PR at `main`
when you're finished.

## Deploying to Production

Simply merge `main` into `prod` and it will be automatically deployed.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production.

### `npm start`

Start the production server that you built with `npm  run build`.

### `npm run update-translations`

Parses the code and extracts new translatable strings into the json files.

## License

This project is open-source software under the MIT license. See the enclosed
`COPYING` file for details.
