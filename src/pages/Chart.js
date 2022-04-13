import React from 'react'

const styles = {
    listItem: {
        listStyle: 'none'
    },
    link: {
        textDecoration: 'none'
    }
}

function Chart() {
    const pageTitle = 'Charts';
        return (
            <section>
                <header>
                    <h1>{pageTitle}</h1>
                    
                </header>
                <p>Sources for the charts used in the Dashboard view.</p>
                <ul>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/TwoLevelPieChart">Double Pie Chart</a>
                    </li>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/LineChartHasMultiSeries">Multi Line Chart</a>
                    </li>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/TinyBarChart">Bar Chart</a>
                    </li>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/TinyLineChart">Line Chart</a>
                    </li>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/TwoSimplePieChart">Pie Chart</a>
                    </li>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/SpecifiedDomainRadarChart">My Radar Chart</a>
                    </li>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/SimpleRadialBarChart">My Radial Chart</a>
                    </li>
                    <li style={styles.listItem}>
                        <a style={styles.link} href="https://recharts.org/en-US/examples/PercentAreaChart">Percent Area Chart</a>
                    </li>
                </ul>

            </section>
        )
}

export default Chart