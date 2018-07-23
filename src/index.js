import React from 'react';
import ReactDOM from 'react-dom';

function SatnamsReactApp() {
    return (
        <div className="Sat">
        <h1>Hello React</h1>
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.render( <SatnamsReactApp />, root)