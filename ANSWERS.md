- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to catch a few bugs before they become a problem, by checking the "type" (string, object, etc.) of each property in the component. It's important to check the data in JavaScript because JavaScript has dynamic typing, which means that you do not need to declare the type of data before using that data, unlike languages with static typing. Using dynamic typing, the data type is implied and that can lead to errors. So it does not hurt to type check the data, to prevent those problems.

- [ ] Describe a life-cycle event in React?

The React Lifecycle has a few phases:

-The Birth/Mounting Phase- This is when the component is being built. The initial data to be used will be defined on the constructor during this mounting phase. componentDidMount can be used here to load data from remote locations and the render method will be called.

-Growth/Updating Phase- This is when the component’s state data can be changed using setState, which forces a call to render. If needed, shouldComponentUpdate could be used during this updating phase to stop a component from calling render.

-Death/Un-mounting Phase- Component is removed from the screen. componentWillUnmount is called during this un-mounting phase for component clean-up.

- [ ] Explain the details of a Higher Order Component?

Higher Order Components (HOC) are React patterns that allow the programmer to reuse component logic. A HOC is basically a function that will receive a component as an argument, and will return a new component source. This allows for shared functionality between components and helps with keeping the code DRY. It can also be used as a container for other components, and can conditionally render a component based on a variable (e.g. showing a login page [logged out] versus a posts page [logged in] on a social media website).

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Three different ways to style components in React are:

-CSS- Using CSS in its own file is beneficial because it is simple, familiar, and utilizes class names. It is easy to implement multiple classes on the data in order to apply universal styles and some may like the separation of JS and CSS, or the shorter JS files compared to styled-components.

-Reactstrap/Bootstrap- What is nice about using Reactstrap/Bootstrap is that there are some pre-built components that have already been styled using the Bootstrap styling library. The programmer gets a chance to use the Bootstrap styling library for built-in styled classes, and also interactive styled components that can be used for interactivity throughout the react application.

-styled-components- It is CSS written in JavaScript, which can be beneficial because the CSS for the corresponding JS is in the same file, and prevents excessive amounts of files in a project folder. It is also nice to have more semantic tags in our components. Lastly, it can use indentation syntax which is convenient for things such as &:last-child, :hover, and media queries.