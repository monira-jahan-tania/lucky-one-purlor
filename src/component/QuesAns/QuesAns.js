import React from 'react';
import './QuesAns.css'

const QuesAns = () => {
    return (
        <div className='ques-ans'>
            <div className="ques-1">
                <h1>How Does useState Work?</h1>
                <p>In useState we set an initial value or initial state in a function. Usestate helps to update and returns the declared variable with current state and another function which update the variable.</p>
            </div>
            <div>
                <h1>What are the differences between props and state?</h1>
                <ol>
                    <li>State is the local state of the component which cannot be accessed. On the other hand, props make components reusable by giving components the ability to receive data from their parent component in the form of props. They
                    </li>

                    <li>State cannot be modified outside of the component. On the other hand, props can be used in other components.
                    </li>
                    <li>
                        State equivalent to local variables in a function. On the other hand, props are equivalent to function parameters.
                    </li>
                    <li>
                        State is an asynchronous function. On the other hand, props are read only
                    </li>
                </ol>
            </div>
            <p></p>
        </div>
    );
};

export default QuesAns;