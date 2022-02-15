import React from 'react';
import Favorite from './componenets/Favorite';
import Menu from './componenets/Menu';

function App() {
    return (
        <div>
            <Menu something="whatever" />
            <hr />
            <Favorite />
        </div>
    )
}

export default App;
