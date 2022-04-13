import React from 'react'
import DoublePieChart from '../components/Graphs/DoublePieChart'
import MultiLineChart from '../components/Graphs/MultiLineChart'
import MyBarChart from '../components/Graphs/MyBarChart'
import MyLineChart from '../components/Graphs/MyLineChart'
import MyPieChart from '../components/Graphs/MyPieChart'
import MyRadarChart from '../components/Graphs/MyRadarChart'
import MyRadialChart from '../components/Graphs/MyRadialChart'
import PercentAreaChart from '../components/Graphs/PercentAreaChart'

const styles = {
    wrapper: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '.25rem',
        gridAutoRows: 'minmax(11rem, auto)'
    },
    one: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '1 / 7',
        gridRow: '1',
        padding: '.75rem'
    },
    two: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '1 / 3',
        gridRow: '2',
        padding: '.75rem'
    },
    three: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '3 / 5',
        gridRow: '2',
        padding: '.75rem'
    },
    four: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '5 / 7',
        gridRow: '2',
        padding: '.75rem'
    },
    five: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '1 / 4',
        gridRow: '3 / span 2',
        padding: '.75rem'
    },
    six: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '4 / 7',
        gridRow: '3 / span 2',
        padding: '.75rem'
    },
    seven: {
        background: 'rgba(223, 223, 223, .7)',
        gridColumn: '7 / 9',
        gridRow: '1 / span 4',
        // padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '.75rem'
    },
    chartTitle: {
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '300',
        textDecoration: 'underline',
        margin: '0 0 .5rem 0'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '0 0 1rem 0'
    },
    title: {
        fontWeight: '300',
        fontSize: '1.4rem',
        color: 'rgba(175,175,175, 1)'
    },
    input: {
        border: 'none',
        width: '80%',
        height: '2.5rem',
        alignSelf: 'center'
    }
}

function Dashboard() {
    const pageTitle = 'Dashboard'
    return (
        <section>
            <header style={styles.header}>
                <h1 style={styles.title}>{pageTitle}</h1>
                <input style={styles.input} type='text' name='searchBar' placeholder='search here'/>
            </header>
            <div style={styles.wrapper}>
                <div style={styles.one}>
                    <h3 style={styles.chartTitle}>Line Chart</h3>
                    <MyLineChart />
                </div>
                <div style={styles.two}>
                    <h3 style={styles.chartTitle}>Pie Chart</h3>
                    <MyPieChart />
                </div>
                <div style={styles.three}>
                    <h3 style={styles.chartTitle}>Multiple-Lines Chart</h3>
                    <MultiLineChart />
                </div>
                <div style={styles.four}>
                    <h3 style={styles.chartTitle}>Bar Chart</h3>
                    <MyBarChart />
                </div>
                <div style={styles.five}>
                    <h3 style={styles.chartTitle}>Radar Chart</h3>
                    <MyRadarChart />
                </div>
                <div style={styles.six}>
                    <h3 style={styles.chartTitle}>Percent Area Chart</h3>
                    <PercentAreaChart />
                </div>
                <div style={styles.seven}>
                    <h3 style={styles.chartTitle}>Radial Chart</h3>
                    <MyRadialChart />
                    <h3 style={styles.chartTitle}>Double Pie Chart</h3>
                    <DoublePieChart />
                    <h3 style={styles.chartTitle}>Another Multi-Line Chart</h3>
                    <MultiLineChart />
                </div>
            </div>
        </section>
    )
}

export default Dashboard