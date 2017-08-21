import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import {validateForm} from '../../helpers/validate-form'

//Components
import Header from '../header/header'
import Footer from '../footer/footer'
import Errorstrip from '../error-strip/error'
import TaskForm from '../task-form/form'
import PageLoader from '../page-loader/loader'

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
      this.props.todoActions.toggleIsFetchingTask(true)      
      this.props.todoActions.getTaskByIdAsync(this.props.params.taskId)        
    }

    componentWillReceiveProps = (nextProps,nextState) => {      
      if(!this.props.todo.fetchedTask && nextProps.todo.fetchedTask && !nextProps.todo.isFetchingTask){        
        this.setState({
           ...this.state,
          fieldObj: {
           title: nextProps.todo.fetchedTask.title,
           description: nextProps.todo.fetchedTask.description            
          }
        })             
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

    update = () => { 
      const response = validateForm(this.state.fieldObj)  
      this.setState({        
        fieldValidators: {
         titleValidateMsg : response.titleValidateMsg,
         descriptionValidateMsg : response.descriptionValidateMsg,
        }
      })

      if(response.isValid){       
        this.props.todoActions.toggleIsUpdatingTask(true)
        this.props.todoActions.updateTaskAsync(this.props.params.taskId,this.state.fieldObj.title,this.state.fieldObj.description)
      }      
    }
   
    render() {      
        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header todo={this.props.todo}/>	
                
                {!this.props.todo.isFetchingTask && !this.props.todo.getTaskError &&
                  <div className="screenfull flex-column-center elasticContent">                    
                    <div className="form_container card-bgshadow">
                        {/*Error-strip*/} 
                        {this.props.todo.createTaskError &&
                          <Errorstrip errorMsg={this.props.todo.createTaskError} />
                        }

                        <div className="edit_container">                         

                            <p className="page_title">Edit the task</p>

                            {/*Task-form*/}  
                            { this.props.todo.fetchedTask &&                          
                              <TaskForm fieldObj = {this.state.fieldObj} fieldValidators = {this.state.fieldValidators} changeInputData = {(newVal,fieldName) => this.changeInputData(newVal,fieldName)} /> 
                            }
                            
                            <div className="button_suit">
                                <button  onClick={() =>  browserHistory.push('/') } className="default-inputfield button_cancel">                             
                                  Cancel
                                </button>
                                {!this.props.todo.isUpdatingTask &&
                                  <button  onClick={this.update} className="default-inputfield button_update"> 
                                  <i className="fa fa-refresh"></i>&nbsp;
                                    Update
                                 </button>
                                }
                                {this.props.todo.isUpdatingTask &&
                                  <button className="default-inputfield button_update"> 
                                  <i className="fa fa-refresh fa-spin"></i>&nbsp;
                                    Updating..
                                 </button>
                                }
                            </div>                                                                   
                        </div> 
                      </div>                             
                  </div>
                }

                {(this.props.todo.isFetchingTask || this.props.todo.getTaskError) &&
                  <div className="screenfull flex-column-center elasticContent">
                    <PageLoader isLoading={this.props.todo.isFetchingTask} errorMsg={this.props.todo.getTaskError}/>
                  </div>
                }
                  
                {/*Footer*/}                  
                <Footer/>               
            </div>    	  	
        );
  }
}

export default App;
