import React from 'react';
import {ChipButton} from './common/Button';
import  AddIcon from './assets/AddIcon';

function App(props) {
    return (
        <div>
            <ChipButton label="Add"><AddIcon /></ChipButton>
        </div>
    );
}

export default App;
