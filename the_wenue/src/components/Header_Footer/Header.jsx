import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawerheader from './Drawer';



export default class Header extends Component {


	state ={
		drawerOpen : false,
		headerShow: true,
	}

componentDidMount(){
	window.addEventListener('scroll', this.handleScroll);
}
componentWillUnmount(){
	window.removeEventListener('scroll', this.handleScroll);
}

handleScroll =()=>{
	(window.scrollY > 0)? this.setState({ headerShow: false}):this.setState({ headerShow: true});
	}

	toggleDrawer = (val)=>{
		this.setState({
			drawerOpen: val,
		})
	}
	

  render() {
		const{headerShow}=this.state;
    return (
      <AppBar position="fixed"
              style={{
							 backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
							 boxShadow: 'none',
							 padding: '10px 8px'
						 }}>

				<ToolBar>
					<div className={headerShow ? 'header_logo':'header_logo trans'}>
							<div className="font_righteous header_logo_venue">The Venue</div>
							<div className="header_logo_title">Musical events</div>
					</div>

					 <IconButton aria-label="Menu"
											color="inherit"
											onClick={()=> this.toggleDrawer(true)} >
						<MenuIcon />

					</IconButton>

					<Drawerheader open={this.state.drawerOpen} 
					onClose={this.toggleDrawer}/>

				</ToolBar>

      </AppBar>
    )
  }
}
