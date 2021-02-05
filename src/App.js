import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Adress from './components/profile/Adress';
import FullName from './components/profile/FullName';
import ProfilPhoto from './components/profile/ProfilPhoto';
import MyForm from './components/profile/formulaire/MyForm';
import Menu from './components/profile/header/Menu';

function App() {
  return (
    <div className="App">
    <Menu />
    <div className="infoPerso"> 
      <div> 
        <FullName />
        <Adress />
      </div>
      <ProfilPhoto/>
    </div>
    <MyForm/>
    </div>
  );
}

export default App;
