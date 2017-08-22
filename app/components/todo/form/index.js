import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

const defaultProps = {
  fieldObj : {},    
  fieldValidators : {}  
};

const propTypes = {
  fieldObj : PropTypes.shape({}),
  fieldValidators : PropTypes.shape({}),
  changeInputData : PropTypes.func.isRequired   
};

class App extends  React.Component { 

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
    const { fieldObj } = this.props;     
    this.setState({
      fieldObj: fieldObj
    })
  }

  changeInputData = (event,fieldName) => {
    const { changeInputData } = this.props;
    this.setState({  
      ...this.state,     
      fieldObj: {
        ...this.state.fieldObj,
        [fieldName] : event.target.value
      }
    }) 
    changeInputData(event.target.value,fieldName) 
  }
 
  render() {

    const { fieldValidators } = this.props;

    return ( 
      <div>
        <div className="input_suit">
          <p className="input_label">Title</p>
          <div>
            <input type="text" onChange={(event) => this.changeInputData(event,"title")} value={this.state.fieldObj?this.state.fieldObj.title: ""} className="default-inputfield input_txt" placeholder="Enter task title" />
          </div>
          <p className="input_error">{fieldValidators.titleValidateMsg}</p>
        </div> 
        <div className="input_suit">
          <p className="input_label">Description</p>
          <div>
            <input type="text" onChange={(event) => this.changeInputData(event,"description")} value={this.state.fieldObj?this.state.fieldObj.description: ""} className="default-inputfield input_txt" placeholder="Enter task description" />
          </div>
          <p className="input_error">{fieldValidators.descriptionValidateMsg}</p>
        </div>                       
      </div>    	  	
    );
  }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
