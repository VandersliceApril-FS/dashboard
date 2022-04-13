import React, { useState } from 'react'

const styles = {
    profileImage: {
        width: '2rem',
        height: '2rem',
        backgroundColor: 'lightgrey'
    }
}

function Settings() {
    const [pageTitle] = useState('Settings')
    return (
        <section>
            <h2>{pageTitle}</h2>
            <div style={styles.profileImage}>
                :)            
            </div>
            <p>email@gmail.com</p>
            <p>more information</p>
        </section>
    );
}

export default Settings