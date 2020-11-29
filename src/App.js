import React, {Component} from "react";
import Nav from "./components/Nav/Nav";
import ListNav from "./Utils/ListNav";

class App extends Component {

    render() {
    return (<div>
                <Nav value={ListNav} />
                <h1>Hello Word!!</h1>
                <p> whot now?</p>
            </div>
        )
    }
}

export default App;