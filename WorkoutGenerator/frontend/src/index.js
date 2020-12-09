import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import AllExercises from './components/AllExercises.js';
import PageName from './components/PageName.js';
import 'fontsource-roboto';
import InfoButton from './components/InfoButton';


class App  extends React.Component{
    render() {
        return(
            <div>
                <div>
                    <PageName name="Workout generator" className="first_flex"/>
                </div>
                <div>
                    <AllExercises />
                </div>
            </div>
        );
    }
}




ReactDOM.render(
    <div  className="flex">
        <App />,
    </div>,
    document.getElementById("root")
);