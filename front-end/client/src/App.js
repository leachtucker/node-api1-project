import '../node_modules/bulma/css/bulma.min.css';
import './App.css';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <div className="header my-5">
        <h1 className="title is-2 has-text-white has-text-centered">App</h1>
      </div>
      <Users />
    </div>
  );
}

export default App;
