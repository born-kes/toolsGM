import React, {Component} from "react";
import Nav from "./components/Nav/Nav";
import NavBar from "./components/NavBar/";
import ListNav, {NavBarList} from "./Utils/ListNav";

class App extends Component {

    render() {
    return (<div>
            <NavBar item={NavBarList} ></NavBar>
                <Nav className={`nav`} value={ListNav} />
                <h1>Hello Word!!</h1>
                <p> whot now?</p>
            </div>
        )
    }
}

export default App;