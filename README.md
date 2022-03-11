# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




1. Tell me about componentWillMount and the issues with it? 

 

ComponentWillMount() is a legacy lifecycle method that allows a developer to enact server-side logic before its respective component is rendered on the DOM, this can helpful as it helps us avoid putting in incomplete elements that hamper the user’s experience. This mainly used for API calls and attributing values in the state. 

However, this method has produced a considerable issue over the years, hence its reputation for being unsage. That being, in some cases, it making a second render call on the client side that disrupts the user’s experience. As of now, we use the constructor method or componentDidMount() in its place. 

 

 

2. Can you walk me through the cycle of mounting a stateful component? What functions are called in what order? Where would you place a request for data from the API? Why? 

 

The mounting process is a part of a stateful component’s lifecycle, specifically after initialization & before updating. In this step the react component is latched onto the DOM where it’s then rendered. The functions used for this to happen are ordered: 

- constructor() 

Initializes state and binds event handlers 

 

- render() 

Mainly returns React elements 

 

- componentDidMount() 

Mostly used for asynchronous fetches 

Typically the API call would be made within componentDidMount() so the data would be requested after the element is posted on the page. 

 

 

3. If you had unlimited time budget and could fix / improve / change one thing in your last project, what would it be and why? 

 

So back in school me & a few classmates made an app called Kodeblogger. It was essentially a website where users, after authenticating themselves, could congregate around software development, post their code, leave comments, etc. I’d say it was a very basic version of Stack Overflow for example. It mostly came out well but with unlimited time & resources I think a vast improvement would be showing the execution a user’s code via a text editor and terminal on par with something like Visual Studio Code. For instance, if a user typed a JavaScript function I’d want them to see if it compiles and returns a value if available – something similar would work with HTML and CSS, but I’d want DOM elements with stylings returned in a new a browser tab instead.  

I mainly want this functionality to smooth out the user experience and keep people on our website. Sure, it isn’t necessary but retaining visitors is key for maintaining and growing a product, I’m sure that’s a major factor at Tonebase as well.  
