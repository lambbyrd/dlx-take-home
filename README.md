## Setup

I based this off of Create React App. I added Concurrently and Json-server with another script.

### Background

I tried my best to follow everything in the spec given. One major change is going to be the mock fetch requirement. I felt it was too difficult(more like time consuming...) to mock out fetch with typescript, and really thought it was taking away from completing the project.

Instead I thought is would be better to just spin up a simple json server. That way I can use the real fetch, show how I make api calls and focus more on developing on the feature.

With that said, some of the asks around what the backend returns based on data submitted were handled on the frontend. I would then make the appropriate get call. The Json-server I have set up is limited in how I configured it. To make the "backend" work how it was detailed in the spec would have been more work outside of the feature. So I kept it simple.

I hope that above call is okay, and I'm happy to talk more indepth as to why I made that decision.

Also... this thing ain't sexy!

### Get Started

Pull down this repo and create a new project. Then complete the steps below.

    - yarn install
    - npm install json-server -g

Now you should be able use my script below to start the project.

## Additional Scripts

### `yarn develop`

This script starts up the json server and then starts the react app.

### Last Thought

There is a bug that randomly shows in validation of Car Make... If you refresh it will fix it. Not quite sure how it gets in that state. Happens very rarely. You probably won't see it, but thought I should call it out.

## Below is all CRA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
