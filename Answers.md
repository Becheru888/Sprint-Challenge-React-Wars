# Answers

1.  What is React JS and what problems does it try and solve?

* React is a JavaScript library for building user interfaces.
* DOM operations are quite expensive in terms of performance, and any application that has much of DOM operations in the background will render slowly.
* React solves this problem, without even having the page reload. It does by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.

1.  What does it mean to _think_ in react?

* Thinking in react means that when look at any website you have to think that every piece of code can be structured into components like navbar, aside sections, main sections. And every component you wrote is an reusable piece of code.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

* The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.

* A class component requires you to extend from React.Component and create a render function which returns a React element. 

* Because a functional component is just a plain JavaScript function, you cannot use setState() in your component. That’s the reason why they also get called functional stateless components. So everytime you see a functional component you can be sure that this particular component doesn’t have its own state.

* If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.

1.  Describe state.

* The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behaviour of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component. 

1.  Describe props.

* Most components can be customized when they are created, with different parameters. These creation parameters are called props.
