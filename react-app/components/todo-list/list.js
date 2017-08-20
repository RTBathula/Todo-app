import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import EllipsisText  from 'react-ellipsis-text';

//Components
import Header from '../header/header'
import Footer from '../footer/footer'

class App extends Component { 

    constructor(props) {
        super(props)        
    }

    componentWillMount() {
        if(!this.props.todo.isShowCreatebtn){
          this.props.todoActions.toggleCreateBtn(true)
        }        
    }
   
    render() {
        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header todo={this.props.todo} />	
                
                <div className="screenfull horizontal-center elasticContent">  
                    <div className="list_container">   
                        <table className='table list_table'>                    
                            <tbody>
                                <tr>                                                
                                  <td>
                                    <div className="list_card_wrap">
                                        <div className="list_card_title">
                                            <span>
                                                <EllipsisText text={'Skype Interview with Google Skype Interview with Google Skype Interview with Google'} length={41} /> 
                                            </span>
                                        </div>
                                        <div className="flex-row-space-start">
                                            <div>
                                                <span className="list_task_date">20th,July,2018</span>
                                            </div>
                                            <div className="list_card_controls" style={{"marginLeft": "4px"}}> 
                                                <span>
                                                    <i className="fa fa-eye list_card_view" aria-hidden="true"></i>                                           
                                                </span>
                                                <span>
                                                    <i className="fa fa-pencil list_card_edit" aria-hidden="true"></i>                                            
                                                </span>
                                                <span>
                                                    <i className="fa fa-times list_card_remove" style={{"color": "red"}} aria-hidden="true"></i>                                            
                                                </span>
                                            </div>
                                        </div>                     
                                    </div>
                                  </td>                          
                                </tr>
                            </tbody>
                        </table>                                
                    </div>            
                </div>
                  
                {/*Footer*/}                  
                <Footer/>               
            </div>    	  	
        );
  }
}

export default App;
