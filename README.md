# React Homework

## Getting Started

1. Fork this repo
2. Install dependencies: `npm install`
3. Run the tests: `npm test`
4. Run it locally: `npm start`

Your goal here is to make all the tests pass. The tests are organized in tiers.
You are advised to work through these tiers in order (`tests/tier-1` followed
by `tests/tier-2.js`, etc).

The only code you need to write is in the `src/components` folder. You are free to edit those files as much as you need to to get the tests to pass (e.g. by converting a functional component to a class component). Please do not modify the tests except to make them run or pend (e.g. `xit`, `it.only`, `describe.only`). Each tier has instructions and hints at the top. _Please read the hints carefully before beginning the tests._ They are there to help you!

You know what else is there to help you? The React Dev Tools!

- [Chrome Install](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Install](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

As you work through the tests, you are encouraged to view the running React application in your browser, especially because you will be able to leverage the awesome power of the React Dev Tools. If you'd like to see how your React application responds to server errors, take a look at `app.js` -- you will find code in the comments to simulate a server that takes a long time to respond, or simply responds with an error.

You can view the React application in the browser at
[localhost:8080](http://localhost:8080)

Tier 1: SinglePet component
[X] renders a pet's name, description, and species passed in as props
[X] renders different name, description, and species if passed different props
[X] renders a 'Toggle Status' button
[X] the 'Toggle Status' button toggles 'Available' to 'Adopted!'
[X] the 'Toggle Status' button toggles 'Adopted!' to 'Available'
[X] the 'Toggle Status' button toggles the 'adopted' css class

Tier 2: PetList component
[X] renders a list of SinglePets
[X] renders a select dropdown with three options: all, cats, dogs
[X] when the filter is set to 'cats', only render SinglePets with cats
[X] when the filter is set to 'dogs', only render SinglePets with dogs

Tier 3: Root component
[X] fetches data from /api/pets once after Root first mounts
[X] renders PetList with data retrieved from /api/pets
[X] displays loading message while waiting for the data
[X] displays error message if the server responds with status code 500

EXTRA CREDIT: Tier 4: DeletePet component
[X] renders a 'Delete' button with delete-pet class
[X] sends a delete request to /api/pets/:petId when user clicks the button
[X] calls props.handleDelete if the delete request is successful
[X] does not call props.handleDelete if the delete request fails integration
[X] SinglePet renders DeletePet
[X] DeletePet removes the deleted pet when clicked
