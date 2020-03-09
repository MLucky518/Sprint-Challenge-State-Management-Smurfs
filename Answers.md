1. What problem does the context API help solve?
it help solve issues regarding global state and children being able to pass information back to parents

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions- functions that feed information into the reducers

reducers= a function that copies your state and returns a modified copy

store- a global storage object containing all of your state data

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the bigger picture in terms of state(things that concern every part of your app), while component state is state that is at the component level and only concerns the component

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk acts as a middle man in terms of allowing us to make changes before our actions are fed to the reducer.
it allows for more customized action creators


1. What is your favorite state management system you've learned and this sprint? Please explain why!
i like them both for different reasons, redux for its ability to set all of my state into one place and context for its ease of use for smaller projects