




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
