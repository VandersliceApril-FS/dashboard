import React from 'react'
import Nav from './components/Nav'
import Routes from './components/Routes'
import Logo from './components/Logo'
import { BrowserRouter as Router} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%'
  },
  sidebarLeft: {
    width: '20%',
    height: '100vh',
    border: '1px solid transparent',
    position: 'relative',
    backgroundColor: '#272727'
  },
  main: {
    backgroundColor: '#f0f0f0',
    width: '80%',
    
    padding: '.75rem',
  }
}

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.sidebarLeft}>
            <Logo />
            <Nav />    
        </div>
        <main style={styles.main}>
          <Routes />
        </main>
      </div>
    </Router>   
  );
}

export default App;
