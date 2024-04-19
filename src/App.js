import logo from './logo.svg';
import './App.css';
import My_map from './Map';
import Get_pos from './Get_pos';

function App() {
  return (
    <div className="App">
      <h1>Google map</h1>
      {/* <My_map></My_map> */}
      <Get_pos></Get_pos>
    </div>
  );
}

export default App;
