import { Route } from 'wouter';

// Pages
import Home from './pages/Home';
import Country from './pages/Country';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home}></Route>
      <Route path="/country/:id" component={Country}></Route>
    </div>
  );
}

export default App;
