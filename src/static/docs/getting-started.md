# Getting Started

## Browser

TeddyTags is hosted on major CDNs like UNPKG and jsDelivr. To get TeddyTags in

- UMD
  ```html
  <script src="https://unpkg.com/teddytags@latest/lib/teddytags.umd.js"></script>
  <!-- And use the global "TeddyTags" variable -->
  ```
- ES Modules
  ```html
  <script type="module">
    import * as teddy from "https://unpkg.com/teddytags@latest/lib/teddytags.js";
  </script>
  ```
  **Or, if you prefer ([should prefer](https://www.pika.dev/cdn))**
- Pika CDN
  ```html
  <script type="module">
    import * as teddy from "https://cdn.pika.dev/teddytags";
  </script>
  ```

---

## Node

TeddyTags is also available on NPM and Yarn. To install TeddyTags, run one of the below:

- NPM
  ```shell-session
  npm i teddytags
  ```
- Yarn
  ```shell-session
  yarn add teddytags
  ```

---

## Deno

TeddyTags can be used in Deno as well, provided you use it in a browser using their server module.

```ts
import * as teddy from "https://deno.land/x/teddytags/src/index.ts";
```

---

## Pro Setup (or a template)

This setup contains all the things a React, Angular or a Vue project has. It supports live reload, page configuration, highly optimized production builds via Parcel, and much more.
It is not a special CLI or whatever, but a repository hosted at GitHub which you can fork and use.

### Features

- A score of 100 in LightHouse ([proof](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fteddytags-starter-template.now.sh%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext))
- Automatic creation of WebManifest(see `pkg.pwaManifest`) and service worker(see `pkg.sw-precache`)
- Lint code with ESLint and pretty with Prettier

**Get the template at https://git.io/teddytags-starter**

**See the deployed one at https://teddytags-starter-template.now.sh**
