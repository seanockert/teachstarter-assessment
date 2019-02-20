# Teach Starter Assessment

## Demo

**[View demo here](https://so-teachstarter-assessment.surge.sh/)**

## Assessment criteria

**1. A backend request with any open source data set (i.e. user data)**

Data is stored in a JSON format on jsonstore.io and updated through an API.

**2. Fetch data and populate a UI with a summary list**

Fetch request to load the data from the endpoint on main component DidMount event, then render as a list.

**3. Provide a search field that interacts with the data**

Items in the list can be filtered based on search query. Filter searchs the _title_ and _summary_ of items.

**4. Provide a feature to like/wave to a list item and provide a running count _and_ within the more details component for the list item selected, also provide the ability to like/wave to the item and develop a running like count**

A like button uses Redux to update the state and update the data on the server via a POST request.

**5. Users can select a single list item and upon selection, show a component for that list item offering more details.**

Uses React Router to display more information for each listing item when clicked.

## Styling

Using the Bootstrap library for this task was a bit overkill, so I have opted to write my own CSS for the app in: `/src/assets/styles/`.

However, as an example of using Bootstrap CSS styles, please find a static HTML in this folder: `/bootstrap-html/`.

[View demo of static Bootstrap layout here](https://so-teachstarter-assessment.surge.sh/bootstrap-html/)

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```
