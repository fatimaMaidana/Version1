import {Link, Router} from "react-router-dom";
import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography,makeStyles } from "@material-ui/core";

const useStyles= makeStyles (theme=>({
    offset: theme.mixins.toolbar,

    title: {
        flexGrow:1
    },
    appBar: {
        width: `calc (100%-$for{240}px)`,
        marginLeft:240,
    }
}
))

const Navbar = () => {
    const classes = useStyles()
    return (  
        <nav className = "Navbar">
           
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant = 'h6' className={classes.title}>
                        Domus Inmoviliaria
                        </Typography>
                        <div className= "links">
                
                        <Link to="/">
                            <Typography variant="text" className={classes.title} color='inherit' >
                            Inicio 
                            </Typography>
                            </Link>
                        <Link to="/catalogo">
                        <Typography variant="text" color='inherit' className={classes.title}>
                            Catalogo
                            </Typography>
                            </Link>
                        <Link to="/contacto">
                        <Typography variant="text" color='inherit' className={classes.title}>
                            Contacto
                        </Typography>
                        </Link>
                        </div>
                    
                    </Toolbar>
                </AppBar>
         
            
        </nav>
    );
}
 
export default Navbar;