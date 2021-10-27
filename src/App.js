import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
