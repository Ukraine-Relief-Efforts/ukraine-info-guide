# Ukraine Info Guide

The frontend repo for the Ukraine Info Guide.

## Adding New Languages

The translation files are located in `public/locales/`. You can simply copy
one of the other languages and update the translations as needed.

When adding a new language, you also need to add it to the list of locales in
`i18next-parser.config.js` and to the language picker in
`src/Components/NavBar/LanguagePicler.js` (if you don't know how to do
this then just create a pull request anyway and the reviewer can handle it).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

### npm run update-translations

Parses the code and extracts new translatable strings into the json files.

### `npm test`

We haven't got any test yet!

