# TeddyTags Template

The official and recommended template to use while creating a PWA with TeddyTags.

See the deployed version at https://teddytags-starter-template.now.sh/

# Features

- A score of 100 in LightHouse ([proof](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fteddytags-starter-template.now.sh%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext))
- Automatic creation of WebManifest(see `pkg.pwaManifest`) and service worker(see `pkg.sw-precache`)
- Lint code with ESLint and pretty with Prettier
- Uses Parcel, the blazing fast zero-conf app bundler

# Commands

## `npm run dev`

Opens a development server at http://localhost:1300,

## `npm run build`

Creates a optimized production build in the `build/` directory.

## `npm run lint`

Lints the codebase with ESLint.

# Preferences

## TypeScript

- Install typescript `npm i typescript -D`
- Change extensions of `.js` files to `.ts`
- For linting, see [typescript-eslint - Linting the Codebase](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)

## Sass

See [Parceljs.org - Sass](https://parceljs.org/scss.html)

## Less

Parcel supports Less out of the box. Just make some `.less` and start hacking.
