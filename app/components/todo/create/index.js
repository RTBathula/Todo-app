import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import {validateForm} from '../form/helper';
import Header from '../../header';
import Footer from '../../footer';
import Errorstrip from '../../error-strip';
import TaskForm from '../form';
import "./style.scss";

const defaultProps = {
  isShowCreateBtn : false,
  isCreatingTask : false,  
  createTaskError : ""  
};

const propTypes = {
  isShowCreateBtn : PropTypes.bool,
  isCreatingTask : PropTypes.bool,
  createTaskError : PropTypes.string,
  toggleCreateBtn: PropTypes.func.isRequired,
  toggleIsCreatingTask: PropTypes.func.isRequired,
  createNewTaskAsync: PropTypes.func.isRequired
};

class App extends React.Component { 

    constructor(props) {
      super(props) 
      this.state = { 
        fieldObj: {    
          title: "",
          description: ""
        },
        fieldValidators: {
          titleValidateMsg: "",
          descriptionValidateMsg: ""
        }      
      }          
    }

    componentWillMount() {
      const { 
        isShowCreateBtn, 
        toggleCreateBtn
      } = this.props; 
      
      if(isShowCreateBtn){
        toggleCreateBtn(false)
      }        
    }

    changeInputData = (newVal,fieldName) => {
      this.setState({  
         ...this.state,       
        fieldObj: {
           ...this.state.fieldObj,
          [fieldName] : newVal
        }
      })  
    }

    create = () => { 

      const { 
        toggleIsCreatingTask, 
        createNewTaskAsync
      } = this.props; 

      const response = validateForm(this.state.fieldObj)  
      this.setState({        
        fieldValidators: {
         titleValidateMsg : response.titleValidateMsg,
         descriptionValidateMsg : response.descriptionValidateMsg,
        }
      })

      if(response.isValid){       
        toggleIsCreatingTask(true)
        createNewTaskAsync(this.state.fieldObj.title,this.state.fieldObj.description)
      }      
    }
   
    render() {
      const { 
        isShowCreateBtn,
        createTaskError, 
        isCreatingTask
      } = this.props; 

        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header isShowCreateBtn={isShowCreateBtn}/>	
                
                <div className="screenfull flex-column-center elasticContent">    
                  <div className="form_container card-bgshadow">
                      {/*Error-strip*/} 
                      {createTaskError &&
                        <Errorstrip errorMsg={createTaskError} />
                      }                      

                      <div className="create_container">                         

                          <p className="page_title">Create new task</p>

                          {/*Task-form*/} 
                          <TaskForm fieldObj = {this.state.fieldObj} fieldValidators = {this.state.fieldValidators} changeInputData = {(newVal,fieldName) => this.changeInputData(newVal,fieldName)}/> 

                          <div className="button_suit">
                            <button  onClick={() =>  browserHistory.push('/') } className="default-inputfield button_cancel">                             
                              Cancel
                            </button>

                            {!isCreatingTask && 
                              <button  onClick={this.create} className="default-inputfield button_create"> 
                               <i className="fa fa-floppy-o"></i>&nbsp;
                                Create
                              </button>
                            }

                            {isCreatingTask && 
                              <button  className="default-inputfield button_create"> 
                               <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>&nbsp;
                                Creating..
                              </button>
                            }
                          </div>                                           
                      </div> 
                  </div>            
                </div>

                {/*Footer*/}                  
                <Footer/>               
            </div>    	  	
        );
  }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
