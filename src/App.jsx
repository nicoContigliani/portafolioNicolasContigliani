import logo from './logo.svg';
import './App.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";



import Hellos from './components/Hellos';
import AboutMe from './components/AboutMe';
import Proyects from './components/Proyects';
import ProyectE from './components/ProyectE';
import Company from './components/Company';
import Skill from './components/Skill';
import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div >


      <Router>
        <div className="container mt-5">
          <div className="centrado">
            <div className="centrado">


                <div className="btn-group container">
                  <Link to="/" className="btn btn-outline-dark">Inicio</Link>
                  <Link to="/AbaoutMe" className="btn btn-outline-dark">Sobre Mi</Link>
                  <Link to="/Skills" className="btn btn-outline-dark">Habilidades</Link>
                  <NavLink to="/Company" className="btn btn-outline-dark" activeClassName="active">Experiencia en Empresa</NavLink>
                  <Link to="/Proyects" className="btn btn-outline-dark">Proyectos Frelancer</Link>
                  <Link to="/ProyectE" className="btn btn-outline-dark">Proyectos de Estudio</Link>
                  <Link to="/Educacion" className="btn btn-outline-dark">Educacion</Link>
                  <Link to="/Cursos" className="btn btn-outline-dark">Cursos</Link>
                  <Link to="/Contacto" className="btn btn-outline-dark">Contacto</Link>



              </div>

            </div>


          </div>
          <hr />

          <Switch>
            <Route path="/" exact>
              <Hellos />
            </Route>
            <Route path="/AbaoutMe">
              <AboutMe />
            </Route>
            <Route path="/Skills">
              <Skill />
            </Route>
            <Route path="/Company/" exact>
              <Company />
            </Route>
            <Route path="/Proyects">
              <Proyects />
            </Route>
            <Route path="/ProyectE">

              <ProyectE />
            </Route>
            <Route path="/Educacion">

              <Education />
            </Route>
            <Route path="/Cursos">
              <Courses />
            </Route>
            <Route path="/Contacto">
              <Contact />
            </Route>

          </Switch>
        </div>
      </Router>










    </div>
  );
}

export default App;
