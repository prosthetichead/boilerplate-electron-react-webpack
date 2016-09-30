import React from "react";
import ReactDom from 'react-dom';
import Greeting from "./components/greeting";

class App extends React.Component {
    render() {
        return (
            <Greeting name='Kate' />
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('content')
);