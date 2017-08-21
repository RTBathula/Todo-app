import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import EllipsisText  from 'react-ellipsis-text';
import dateFormat  from 'dateformat';

//Components
import Header from '../header/header'
import Footer from '../footer/footer'
import PageLoader from '../page-loader/loader'

class App extends Component { 

    constructor(props) {
        super(props)        
    }

    componentWillMount() {
        if(!this.props.todo.isShowCreatebtn){
          this.props.todoActions.toggleCreateBtn(true)
        } 
        this.props.todoActions.toggleIsFetchingList(true)
        this.props.todoActions.getTasksListAsync()       
    }
   
    render() {
        return ( 
            <div className="page">      
                {/*Header*/}             
                <Header todo={this.props.todo} />	
                
                {!this.props.todo.isFetchingList && !this.props.todo.fetchingListError &&
                    <div className="screenfull horizontal-center elasticContent">  
                        <div className="list_container">   
                            <table className='table list_table'>                    
                                <tbody>
                                    {
                                        this.props.todo.taskList.sort((a,b) => {                      
                                            return new Date(b.createdAt) - new Date(a.createdAt)
                                        }).map((obj, index) => {
                                        return <tr key = { index }>                                                
                                          <td>
                                            <div className="list_card_wrap">
                                                <div className="list_card_title">
                                                    <span>
                                                        <EllipsisText text={obj.title} length={41} /> 
                                                    </span>
                                                </div>
                                                <div className="flex-row-space-start">
                                                    <div>
                                                        <span className="list_task_date">{dateFormat(obj.createdAt, "mmmm dS, yyyy,h:MM TT")}</span>
                                                    </div>
                                                    <div className="list_card_controls" style={{"marginLeft": "4px"}}>                                               
                                                        <span>
                                                            <Link to={'/edit/' + obj.id}>
                                                                <i className="fa fa-pencil" aria-hidden="true"></i>                                            
                                                            </Link>                                                    
                                                        </span>
                                                        <span>
                                                            <i className="fa fa-times" style={{"color": "red"}} aria-hidden="true"></i>                                            
                                                        </span>
                                                    </div>
                                                </div>                     
                                            </div>
                                          </td>                          
                                        </tr>
                                    })}
                                </tbody>
                            </table>                                
                        </div>                                                   
                    </div>
                }

                {(this.props.todo.isFetchingList || this.props.todo.fetchingListError) &&
                    <div className="screenfull flex-column-center elasticContent">
                        <PageLoader isLoading={this.props.todo.isFetchingList} errorMsg={this.props.todo.fetchingListError}/>
                    </div>
                }
                  
                {/*Footer*/}                  
                <Footer/>               
            </div>    	  	
        );
  }
}

export default App;
