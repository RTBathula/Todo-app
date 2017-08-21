import React, { Component } from 'react'

class App extends Component { 

  constructor(props) {
    super(props)           
  } 
 
  render() {
    return ( 
      <div className="flex-row-start-start error_container">                        
        <div className='error_icon vertical-center'>
          <span>
            <i className="fa fa-exclamation-triangle fa-fw"></i>
          </span>
        </div>
        <div className='error_msg vertical-center'>
          <span>{this.props.errorMsg}</span>
        </div>                       
      </div>    	  	
    );
  }
}

export default App;
