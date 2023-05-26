import './App.css';
import './pages/homepage.css';
import './global.css';
import './pages/homepage.js';
import NavigationBar from './components/headerNfooter/NavigationBar.js';
import Homepage from './pages/homepage.js';
import Footer from './components/headerNfooter/footer.js';

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
