import React from 'react';
import CommandLogo from '../images/command-symbol.svg';

const styles = {
    logo: {
        width: '5rem',
        display: 'flex',
        margin: "20% auto",
      }
}

const Logo = () => {
    return (
        <div >
          <img style={styles.logo} src={CommandLogo} alt="logo"/>
        </div>
    )
}

export default Logo;