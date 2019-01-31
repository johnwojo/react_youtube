import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.
// Component should produce some HTML.


const App = () => {
    return <div>Hey there, rat biscuit!</div>;
}


// Take this component's generated HTML and put it in the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));


// 1.) Make, then 2.) show.
