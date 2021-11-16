import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './ready-set-type.png';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
