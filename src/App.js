import React, {Component} from "react";
import SchemeColor from "./components/SchemeColor/";
import Nav from "./components/Nav/Nav";
import ListNav from "./Utils/ListNav";

class App extends Component {

    render() {
        return (<div>
            <Nav className={`nav`} value={ListNav} />
            <div className={`container`}>
                <SchemeColor />
                <h1>Hello Word!!</h1>
                <p> whot now?</p>
            </div>
    </div>
        )
    }
}

export default App;