import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';
import theme from './theme';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LandingPage from './Pages/LandingPage';
// import Materi from './Pages/Materi';
import Peringkat from './Pages/Peringkat';
import Profil from './Pages/Profil';
import Komik1 from './Pages/Komik1';
import LatihanSoal1 from './Pages/LatihanSoal1';
import LatihanSoal2 from './Pages/LatihanSoal2';
import LatihanSoal3 from './Pages/LatihanSoal3';
import KomentarBaru from './Pages/KomentarBaru';

function App() {
  return (
    
      <div className="App">
        
        <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/LandingPage" component={LandingPage}/>
          {/* <Route path="/Materi" component={Materi}/> */}
          <Route path="/Peringkat" component={Peringkat}/>
          <Route path="/Profil" component={Profil}/>
          <Route path="/Komik" component={Komik1}/>
          <Route path="/KomentarBaru" component={KomentarBaru}/>
          <Route path="/LatihanSoal1" component={LatihanSoal1}/>
          <Route path="/LatihanSoal2" component={LatihanSoal2}/>
          <Route path="/LatihanSoal3" component={LatihanSoal3}/>
        </Router>
        </ThemeProvider>
      </div>
    
  );
}

export default App;
