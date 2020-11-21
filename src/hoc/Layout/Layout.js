import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    menu: false,
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className={classes.Layout}>

        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: !!auth.token
  }
}

export default withRouter(connect(mapStateToProps)(Layout))