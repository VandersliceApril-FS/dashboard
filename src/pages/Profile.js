import React, { useState } from 'react'

const styles = {
    profileImage: {
        width: '2rem',
        height: '2rem',
        backgroundColor: 'lightgrey'
    }
}

function Profile() {
    const [pageTitle] = useState('Profile')
    return (
        <section>
            <h1>{pageTitle}</h1>
            <h4>User Name</h4>
            <div style={styles.profileImage}>
                :)            
            </div>
            <p>email@gmail.com</p>
            <p>more information</p>
        </section>
    );
}

export default Profile;