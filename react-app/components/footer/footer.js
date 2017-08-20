import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component { 

    constructor(props) {
        super(props)   
        this.state = {                                 
        }
    }
   
    render() {
        return (        
            <div className="screen-full footer_strip horizontal-center">
              <div className="screen-desktop">   
                <footer className="footer_container"> 
                    <div className="footer_title flex-column-center">
                        <span>Developed by RT Bathula</span>   
                    </div>            
                </footer>
              </div>
            </div>          
        );
  }
}

export default App;
