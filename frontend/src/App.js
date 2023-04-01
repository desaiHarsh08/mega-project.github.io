import { HomePage, LoginPage } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={'/'} element={<HomePage />} />
          <Route exact path={'/login'} element={<LoginPage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
