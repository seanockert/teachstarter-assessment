# Teach Starter Assessment

The original assessment was to use React/Redux (find this in the `/react/` folder). 

I've also built a second version of the same app in Vue/Vuex (in the `/vue/` folder). This was done to compare their state management, routing, transitions, performance, and ease of development.

## Demos

**[React demo here](https://so-teachstarter-assessment.surge.sh/)**

**[Vue demo here](https://so-teachstarter-assessment-vue.surge.sh/)**

## Todo

- Improve React router transition (slide in/out without requiring an absolute positioned wrapper, which messes up the footer position)
- Use a global 'loading' state in React to show a loading view before data is fetched
- Fetch each listing from API when route loads instead of using global state
