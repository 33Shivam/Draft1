import './App.css';
import './pages/homepage.css';
import './global.css';
import './pages/homepage.js';
import NavigationBar from './components/header/NavigationBar';
import Homepage from './pages/homepage.js';
import Footer from './components/header/footer.js';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Homepage></Homepage>
      <Footer></Footer> 
    </div>      
  );
}

export default App;
