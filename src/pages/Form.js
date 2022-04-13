import React from 'react'

function Form() {
    const [pageTitle] = ['Form', 'Names', 'States']
        return (
            <section>
                <header>
                    <h1>{pageTitle}</h1>
                    <input value='search' />
                </header>
                <div>
                </div>

            </section>
        )
}

export default Form