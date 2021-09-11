import React, {Component} from "react";
import Palette from "./components/Palette";
import seedColors from "./components/seedColors";
import {generatePalette} from "./components/colorHelpers";

class App extends Component {
    render() {
        console.log(generatePalette(seedColors[2]));
        return (
            <div>
                <Palette {...seedColors[2]}/>
            </div>
        );
    }
}

export default App;
