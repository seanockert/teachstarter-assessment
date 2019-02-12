# Teach Starter Assessment

## Demo
[View demo here](https://so-teachstarter-assessment.surge.sh/)

## Assessment criteria

- A backend request with any open source data set (i.e. user data)

**Data is stored on jsonstore.io and updated through an API**

- Fetch data and populate a UI with a summary list

**Fetch request to data on load**

- Provide a search field that interacts with the data 

**Listing items are filtered based on search query. Filters by title and summary of items**

- Provide a feature to like/wave to a list item and provide a running count
- Within the more details component for the list item selected, also provide the ability to like/wave to the item and develop a running like count

**A like button uses Redux to update the state and update the data on the backend via a POST request**

- Users can select a single list item and upon selection, show a component for that list item offering more details. 

**Uses React router to show more information for each listing item**

## Styling

Using the Bootstrap library for this task is a bit overkill so I have opted to write my own CSS for the app: `/src/assets/styles/`.

Please find a static HTML example of using Bootstrap CSS styles in the folder: `/bootstrap-html/`.
