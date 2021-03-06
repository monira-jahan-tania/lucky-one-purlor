import React from 'react';
import './QuesAns.css'

const QuesAns = () => {
    return (
        <div className='ques-ans'>
            <div className="ques-1">
                <h1>How Does useState Work?</h1>
                <p>In useState we set an initial value or initial state in a function. UseState helps to update and returns the declared variable with current state and another function which updates the variable. One component may have one or more useStates and React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component </p>
            </div>
            <div className='ques-2'>
                <h1>What are the differences between props and state?</h1>
                <ol>
                    <li>State is the local state of the component which cannot be accessed. On the other hand, props make components reusable by giving components the ability to receive data from their parent component in the form of props. They
                    </li>

                    <li>State cannot be modified outside of the component. On the other hand, props can be used in other components.
                    </li>
                    <li>
                        State is equivalent to local variables in a function. On the other hand, props are equivalent to function parameters.
                    </li>
                    <li>
                        State is an asynchronous function. On the other hand, props are read only.
                    </li>
                </ol>
            </div>
            <div className='ques-3'>
                <h1>How dow react works?</h1>
                <p>React is a JavaScript library that creates user interfaces in an usable and efficient way using declarative code.We can use it to help build single page applications and mobile apps, or to build complex apps if we utilise it with other libraries. It works in an unidirectional flow. It is a component based which works through render method. Here the site can be updated with state hooks as well as other methods including props.</p>
            </div>
        </div>
    );
};

export default QuesAns;