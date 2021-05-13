import Navbar from './Navbar.js';
import Inicio from './Inicio.js';
import Catalogo from './Catalogo.js';
import Contacto from './Contacto.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Button, ThemeProvider} from '@material-ui/core';
import theme from './ThemeConfig.js';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      </ThemeProvider>
      <Switch>
          <Route path="/catalogo">
            <Catalogo></Catalogo> 
          </Route>
          <Route path="/contacto">
            <Contacto></Contacto>
          </Route>
          <Route path="/">
          <div className="content">
            <Inicio></Inicio>
          </div>
          </Route>
        </Switch>
     
    </div>
  );
}

export default App;
