import React, { Component } from 'react';

import { ReactTableComponent, TextFieldMultiline } from './components';
import { wordCounter } from './tools/wordCounter';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: "",
            data: []
        };
    }

    // isWordLongerThanTwo = word => word.length > 2;
    // wordCounter = (searchingStr) => {
    //     return Object.entries(searchingStr
    //         .split(/\s/g)
    //         .filter(this.isWordLongerThanTwo)
    //         .map(x => x.toLowerCase())
    //         .reduce((result, word) => ({
    //             ...result,
    //             [word]: result[word] ? result[word] + 1 : 1,
    //         }), {})).map(([key, value]) => ({
    //             word: key,
    //             count: value,
    //         }))
    // };

    render() {
        const handleChange = (event) => {
            this.setState({
                value: event.target.value,
                data: wordCounter(event.target.value)
            });
        };

        const columns = [
            {
                Header: 'Mot',
                accessor: 'word',
            },
            {
                Header: 'Nombre',
                accessor: 'count',
            },
        ]

        const { value, data } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <br />
                <p className="App-intro">
                    On cherche à connaitre le nombre d’occurrence de chaque mots dans un texte (les mots de moins de deux lettres seront ignorés).
        </p>

                <TextFieldMultiline
                    label="Merci de saisir du texte"
                    rowsMax="10"
                    value={value}
                    onChange={handleChange}
                    className="textFieldWidth"
                />
                <div className="reactTableCss">
                    <ReactTableComponent
                        data={data}
                        columns={columns}
                        sortedName="word"
                    />
                </div>
            </div>
        );
    }
}

export default App;
