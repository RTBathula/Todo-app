import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import {validateForm} from '../../helpers/validate-form'

//Components
import Header from '../header/header'
import Footer from '../footer/footer'
import Errorstrip from '../error-strip/error'
import TaskForm from '../task-form/form'

class App extends Component { 

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
      if(this.props.todo.isShowCreatebtn){
        this.props.todoActions.toggleCreateBtn(false)
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
      const response = validateForm(this.state.fieldObj)  
      this.setState({        
        fieldValidators: {
         titleValidateMsg : response.titleValidateMsg,
         descriptionValidateMsg : response.descriptionValidateMsg,
        }
      })

      if(response.isValid){       
        this.props.todoActions.toggleIsCreatingTask(true)
        this.props.todoActions.createNewTaskAsync(this.state.fieldObj.title,this.state.fieldObj.description)
      }      
    }
   
    render() {
        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header todo={this.props.todo}/>	
                
                <div className="screenfull flex-column-center elasticContent">    
                  <div className="form_container card-bgshadow">
                      {/*Error-strip*/} 
                      {this.props.todo.createTaskError &&
                        <Errorstrip errorMsg={this.props.todo.createTaskError} />
                      }                      

                      <div className="create_container">                         

                          <p className="page_title">Create new task</p>

                          {/*Task-form*/} 
                          <TaskForm fieldObj = {this.state.fieldObj} fieldValidators = {this.state.fieldValidators} changeInputData = {(newVal,fieldName) => this.changeInputData(newVal,fieldName)}/> 

                          <div className="button_suit">
                            <button  onClick={() =>  browserHistory.push('/') } className="default-inputfield button_cancel">                             
                              Cancel
                            </button>

                            {!this.props.todo.isCreatingTask && 
                              <button  onClick={this.create} className="default-inputfield button_create"> 
                               <i className="fa fa-floppy-o"></i>&nbsp;
                                Create
                              </button>
                            }

                            {this.props.todo.isCreatingTask && 
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

export default App;
