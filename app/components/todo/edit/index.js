import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router'
import {validateForm} from '../form/helper'
import Header from '../../header';
import Footer from '../../footer';
import PageLoader from '../../page-loader';
import Errorstrip from '../../error-strip'
import TaskForm from '../form';
import "./style.scss";

const defaultProps = {
  isShowCreateBtn : false,
  fetchedTask : null, 
  isFetchingTask : false ,
  getTaskError : "" ,
  isUpdatingTask : false,
  updateTaskError : ""  
};

const propTypes = {
  isShowCreateBtn : PropTypes.bool,
  fetchedTask : PropTypes.shape({}),    
  isFetchingTask : PropTypes.bool,
  getTaskError : PropTypes.string,
  isUpdatingTask : PropTypes.bool,
  updateTaskError : PropTypes.string,
  toggleIsUpdatingTask : PropTypes.func.isRequired,
  toggleCreateBtn: PropTypes.func.isRequired,
  toggleIsFetchingTask: PropTypes.func.isRequired,
  getTaskByIdAsync: PropTypes.func.isRequired,
  nullifyFetchedTask: PropTypes.func.isRequired,
  updateTaskAsync: PropTypes.func.isRequired
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
      toggleCreateBtn, 
      toggleIsFetchingTask, 
      getTaskByIdAsync 
    } = this.props; 

    if(isShowCreateBtn){
      toggleCreateBtn(false)
    }
    toggleIsFetchingTask(true)      
    getTaskByIdAsync(this.props.params.taskId)        
  }

  componentWillReceiveProps = (nextProps) => { 
    const { fetchedTask} = this.props;     
    if(!fetchedTask && nextProps.fetchedTask && !nextProps.isFetchingTask){        
      this.setState({
         ...this.state,
        fieldObj: {
         title: nextProps.fetchedTask.title,
         description: nextProps.fetchedTask.description            
        }
      })                     
    }   
  }

  componentWillUnmount = () => {
    const { nullifyFetchedTask} = this.props; 
    nullifyFetchedTask() 
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
    const { 
      toggleIsUpdatingTask, 
      updateTaskAsync
    } = this.props; 

    const response = validateForm(this.state.fieldObj)  
    this.setState({        
      fieldValidators: {
       titleValidateMsg : response.titleValidateMsg,
       descriptionValidateMsg : response.descriptionValidateMsg,
      }
    })

    if(response.isValid){       
      toggleIsUpdatingTask(true)
      updateTaskAsync(this.props.params.taskId,this.state.fieldObj.title,this.state.fieldObj.description)
    }      
  }
 
  render() {  

    const { 
      isShowCreateBtn, 
      getTaskError, 
      isFetchingTask, 
      isUpdatingTask,
      updateTaskError,
      fetchedTask
    } = this.props; 

    return ( 
      <div className="page">      
        {/*Header*/}             
        <Header isShowCreateBtn={isShowCreateBtn} />	
        
        {!isFetchingTask && !getTaskError &&
          <div className="screenfull flex-column-center elasticContent">                    
            <div className="form_container card-bgshadow">
                {/*Error-strip*/} 
                {updateTaskError &&
                  <Errorstrip errorMsg={updateTaskError} />
                }

                <div className="edit_container">                         

                    <p className="page_title">Edit the task</p>

                    {/*Task-form*/}  
                    {fetchedTask &&                          
                      <TaskForm fieldObj = {this.state.fieldObj} fieldValidators = {this.state.fieldValidators} changeInputData = {(newVal,fieldName) => this.changeInputData(newVal,fieldName)} /> 
                    }
                    
                    <div className="button_suit">
                        <button  onClick={() =>  browserHistory.push('/') } className="default-inputfield button_cancel">                             
                          Cancel
                        </button>
                        {!isUpdatingTask &&
                          <button  onClick={this.update} className="default-inputfield button_update"> 
                          <i className="fa fa-refresh"></i>&nbsp;
                            Update
                         </button>
                        }
                        {isUpdatingTask &&
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

        {(isFetchingTask || getTaskError) &&
          <div className="screenfull flex-column-center elasticContent">
            <PageLoader isLoading={isFetchingTask} errorMsg={getTaskError}/>
          </div>
        }
          
        {/*Footer*/}                  
        <Footer/>               
      </div>    	  	
    );
  }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
