import React, { useState, useEffect } from 'react'

const styles = {
    wrapper: {
        width: '100%',
    },
    formContainer: {
        width: 'fit-content',
        margin: '0 auto',
    },
    profileImage: {
        width: '6rem',
        height: '6rem',
        borderRadius: '50%'
    },
    fieldset: {
        border: 'none',
        margin: '1rem 0'
    },
    formLabel: {
        fontSize: '.75rem',
        color: 'grey'
    },
    field: {
        height: '1.5rem',
        margin: '.5rem'
    },
    button: {
        border: 'none',
        borderRadius: '3px',
        backgroundColor: '#000',
        padding: '.5rem .75rem',
        fontSize: '1rem',
        color: '#FEF8F0'
    },
    editPhotoButton: {
        backgroundColor: 'transparent',
        border: 'none'
    },
    title: {
        fontWeight: '300',
        fontSize: '1rem',
        textAlign: 'center'
    },
  
}

function Settings() {
    
    const pageTitle = 'Settings'
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        async function fetchAPI(){
        const response = await fetch('https://randomuser.me/api/'); // pull response from API
        const data = await response.json(); // create json object using API response
        const [user] = data.results; // declare user data

        setUserData(user);
        }
        fetchAPI();
    }, []);

    if (userData) {
        const addressDisplay = `${userData.location.street.number} ${userData.location.street.name}`;
        return (
            <section style={styles.wrapper}>
                <h2 style={styles.title}>{pageTitle}</h2>
                <form style={styles.formContainer}>
                    <div style={styles.photoSection}>
                            <img style={styles.profileImage} src={userData.picture.large} alt='' />
                            <button style={styles.editPhotoButton}>Edit Photo</button>
                    </div>
                    <fieldset style={styles.fieldset}>
                        <legend>Login</legend>
                        <div style={styles.field}>
                            <label style={styles.formLabel}>Username: </label>
                            <input style={styles.input} type='text' defaultValue={userData.login.username} />
                        </div>
                        <div style={styles.field}>
                            <label style={styles.formLabel}>Password: </label>
                            <input type='text' defaultValue={userData.login.password} />
                        </div>
                    </fieldset>
                    <fieldset style={styles.fieldset}>
                        <legend>Personal Information</legend>
                        <div style={styles.field}>
                            <label style={styles.formLabel}>First Name: </label>
                            <input type='text' defaultValue={userData.name.first}/>
                        </div>
                        <div style={styles.field}>
                            <label style={styles.formLabel}>Last Name: </label>
                            <input type='text' defaultValue={userData.name.last} />
                        </div>
                    </fieldset>
                    <fieldset style={styles.fieldset}>
                        <legend>Contact Information</legend>
                        <div style={styles.field}>
                            <label style={styles.formLabel}>Address: </label>
                            <input type='text' defaultValue={addressDisplay}></input>
                        </div>
                        <div style={styles.field}>
                            <label style={styles.formLabel}>City: </label>
                            <input type='text' defaultValue={userData.location.city}></input>
                        </div>
                        <div style={styles.field}>
                            <label style={styles.formLabel}>State/Province/Region: </label>
                            <input type='text' defaultValue={userData.location.state}></input>
                        </div>
                        <div style={styles.field}>
                            <label style={styles.formLabel} for='zip' name='zip'>Zip Code: </label>
                            <input type='text' defaultValue={userData.location.postcode} ></input>
                        </div>
                        <div style={styles.field}>
                            <label style={styles.formLabel} for='phone' name='phone'>Phone: </label>
                            <input type='text' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" defaultValue={userData.phone}></input>
                        </div>
                    </fieldset>
                    <button style={styles.button}>Save</button>
                </form>
            </section>
        );
    }

    return (
        <div> No user found </div>
    ) 
}

export default Settings