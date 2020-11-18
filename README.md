# Document Search

Document Search is a React project which shows a summary of medical information in image clippings.  The components were built using Storybook.  The API for this project is in [Document Search API](https://github.com/camilosegura/document-search-api), read its documentation to know how to run it in your local machine.

## Installation

Use clone this project from [github](https://github.com/camilosegura/document-search), then use the package manager [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/get-npm) to install this project.

```bash
git clone https://github.com/camilosegura/document-search
cd document-search
yarn install
yarn start
```

After install and run go to http://localhost:3000/

## Storybook

To check only the components run

```bash
yarn storybook
```

Then go to http://localhost:6006/ in your machine.

## Usage

In your browser you can use the search input to filter by **flag**, **problems**, **allergies** or **medications**

## TODO

* Filter by all fields
* Add mobile support
* Create autentication
* Publish it in a public URL
* Show the main document when click on a clipping
