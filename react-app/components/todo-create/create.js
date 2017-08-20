import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

//Components
import Header from '../header/header'
import Footer from '../footer/footer'

class App extends Component { 

    constructor(props) {
        super(props)           
    }

    componentWillMount() {
        if(this.props.todo.isShowCreatebtn){
          this.props.todoActions.toggleCreateBtn(false)
        }        
    }
   
    render() {
        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header todo={this.props.todo}/>	
                
                <div className="screenfull flex-column-center elasticContent">  
                    <div className="create_container">                         
                        <p className="page_title">Create new task</p>

                        <div className="input_suit">
                            <p className="input_label">Title</p>
                            <div>
                                <input type="text" className="default-inputfield input_txt" placeholder="Enter task title" />
                            </div>
                            <p className="input_error">Title</p>
                        </div> 

                        <div className="input_suit">
                            <p className="input_label">Description</p>
                            <div>
                                <input type="text" className="default-inputfield input_txt" placeholder="Enter task description" />
                            </div>
                            <p className="input_error">Title</p>
                        </div> 

                        <div className="button_suit">
                            <button  onClick={() =>  browserHistory.push('/') } className="default-inputfield button_cancel">                             
                              Cancel
                           </button>
                           <button  onClick={() =>  browserHistory.push('/') } className="default-inputfield button_create"> 
                             <i className="fa fa-plus"></i>&nbsp;
                              Create
                           </button>
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
