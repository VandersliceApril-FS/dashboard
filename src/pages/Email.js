import React, { useState } from 'react'


function Email() {
    const [pageTitle] = useState('Email')
        return (
            <section>
                <h1>{pageTitle}</h1>
            </section>
        )
}

export default Email