import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

import * as todoActions from '../actions/todo'

//Components
import Todolist from '../components/todo-list/list'

class App extends Component { 

  render() {   
    return (    
  		<Todolist todo={this.props.todo} todoActions={this.props.todoActions} />  		    
    );
  }
}

const mapStateToProps = state => ({
  todo : state.todo
})

const mapDispatchToProps = dispatch => ({
  todoActions: bindActionCreators(todoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


