import React, {useState } from 'react'
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography, 
    Box,
    ListItemIcon

} from "@material-ui/core"

import {
    ArrowBack,
    Book,
    Home,
    Info,
    Apps,
    PeopleOutline,
    AccountBox,
    ContactMail
} from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';

//css styles
const useStyles = makeStyles({
    menuSliderContainer: {
        width: 250,
        background: "#2c2c2c",
        height : "30rem"
    },
    listItem: {
        color: "#ffffff"        
    }
});

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "홈"  
    },
    {
        listIcon: <Apps/>,
        listText: "AI 컨설팅"  
    },
    {
        listIcon: <Book/>,
        listText: "블로그"  
    },
    {
        listIcon: <Info/>,
        listText: "고객센터"  
    },
    {
        listIcon: <PeopleOutline/>,
        listText: "고객사"  
    },
    {
        listIcon: <AccountBox/>,
        listText: "로그인"  
    }
]






const NavBar = () => {
    const [state, setState] = useState({
        right: false
    })
    
    const toggleSlider =  (slider, open) => () => {
        setState({...state, [slider]: open})
    }
    const classes =useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div">
            <Divider/>          
            <List>
                {menuItems.map((lsItem, key)=>(
                    <ListItem button  key={key}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>  
                        </ListItem>                       
                    )) }
            </List>       
        </Box>

    )
    return (
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{background: "#2c2c2c"} }>
                <Toolbar>
                    <Typography variant="h5" style={{color:"#ffffff"}}>COUNSEOLOR</Typography>
                </Toolbar>
                <MobilRightMenuSlider open={state.right}>
                    {sideList("right")}
                </MobilRightMenuSlider>
            </AppBar>

        </Box>
        </>
    )
}

export default NavBar
