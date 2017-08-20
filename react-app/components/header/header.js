import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

class App extends React.Component { 

    constructor(props) {
      super(props)         
    }
   
    render() {         

        return (          	
          <div className="screen-full header_strip horizontal-center">
            <div className="screen-desktop">   
              <header className="header_container flex-column-center">                     
                  <div className="flex-row-space-start">      
                      <div className="header_title">
                        <span>TODO APP</span> 
                      </div>

                      {this.props.todo.isShowCreatebtn &&
                        <div className="header_create">                           
                           <button  onClick={() =>  browserHistory.push('/create') } className="default-inputfield"> 
                             <i className="fa fa-plus"></i>&nbsp;
                              Create
                           </button>
                        </div>
                      }
                                                                        
                  </div>                             
              </header>
            </div>
          </div>               	  	
        );
  }
}

export default App;
