import React, { Component } from 'react'

class App extends Component { 

    constructor(props) {
        super(props)           
    } 
   
    render() {
      return ( 
        <div className="page_loader">                        
          {this.props.isLoading && !this.props.errorMsg &&
            <div className="flex-row-start-start">
              <div>
                <span>
                  <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>&nbsp;                    
                </span>
              </div>
              <div style={{"marginTop":"2px"}}>
                <span>                    
                  Please wait...
                </span>
              </div>
            </div>
          }

          {!this.props.isLoading && this.props.errorMsg &&
            <div className="flex-row-start-start">
              <div>
                <span>
                  <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;                    
                </span>
              </div>
              <div style={{"marginTop":"2px"}}>
                <span>                    
                  {this.props.errorMsg}
                </span>
              </div>
            </div>
          }                      
        </div>    	  	
      );
  }
}

export default App;
