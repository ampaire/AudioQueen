import '../styles/App.css';
import Header from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Millions of good songs just for you
        </a>
      </header>
    </div>
  );
}

export default App;
