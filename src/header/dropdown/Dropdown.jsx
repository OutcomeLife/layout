import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
    
    render() {
        return (
            <div className="dropdown" id="dropdown">
                <hr/>
                <li><a href="/account" 
                onMouseDown={() => alert('onMouseDown')}>account</a></li>
                <hr />
            <li><a href="/logout" onMouseDown={() => alert("onMouseDown")}>logout</a></li>             
            </div>
        );
    }
}

export default Dropdown;