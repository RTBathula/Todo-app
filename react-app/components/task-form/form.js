import React, { Component } from 'react'

class App extends Component { 

    constructor(props) {
      super(props)  
      this.state = { 
        fieldObj: {    
          title: "",
          description: ""
        }     
      }         
    }

    componentWillMount(){    
      this.setState({
        fieldObj: this.props.fieldObj
      })
    }

    changeInputData = (event,fieldName) => {
      this.setState({  
        ...this.state,     
        fieldObj: {
          ...this.state.fieldObj,
          [fieldName] : event.target.value
        }
      }) 
      this.props.changeInputData(event.target.value,fieldName) 
    }
   
    render() {
      return ( 
        <div>
          <div className="input_suit">
            <p className="input_label">Title</p>
            <div>
              <input type="text" onChange={(event) => this.changeInputData(event,"title")} value={this.state.fieldObj?this.state.fieldObj.title: ""} className="default-inputfield input_txt" placeholder="Enter task title" />
            </div>
            <p className="input_error">{this.props.fieldValidators.titleValidateMsg}</p>
          </div> 
          <div className="input_suit">
            <p className="input_label">Description</p>
            <div>
              <input type="text" onChange={(event) => this.changeInputData(event,"description")} value={this.state.fieldObj?this.state.fieldObj.description: ""} className="default-inputfield input_txt" placeholder="Enter task description" />
            </div>
            <p className="input_error">{this.props.fieldValidators.descriptionValidateMsg}</p>
          </div>                       
        </div>    	  	
      );
  }
}

export default App;
