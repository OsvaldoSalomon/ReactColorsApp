import React from "react";
import Palette from "./components/Palette";
import seedColors from "./components/seedColors";

function App() {
    return (
        <div>
            <Palette {...seedColors[2]}/>
        </div>
    );
}

export default App;
