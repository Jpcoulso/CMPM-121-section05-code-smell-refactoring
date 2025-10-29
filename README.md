# Section 5 – Refactoring Code Smells in Practice

Section Activity:
code smell: duplicate code
refactor: extract function
explanation: duplicate code used to add event listeners to button objects, created a function that
accepts a button HTML element and creates a listener for it.

code smell: unnecessary comments, aka 'deodorant comments'
refactor: rename method (in my case it was more like 'rename variable')
explanation: button HTMLElements had horrible names and thus needed comments to understand what they were, I renamed the buttons to make them more understandable and deleted the comments
