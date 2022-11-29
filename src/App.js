// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // BrowserRouter
} from "react-router-dom";
import Landing from "./view/landingPage/Landing";
import Dashboard from "./view/admin/dashboard/dashboard";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="*" element={<Landing />} /> */}
        
        </Routes>
      </Router>
    </main>
  );
}

export default App;
