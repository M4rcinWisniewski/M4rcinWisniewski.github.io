
const Logo = () => {
    const Stylesh1 = {
        fontSize: '4.5rem',
        color: '#eeeeee',
        textAlign: 'center'
    }
    const Stylesh3 = {
        fontSize: '2rem',
        color: '#eeeeee',
        textAlign: 'center',
        backgroundColor: '#262626',
        margin: '-30px 10px 50px 10px',
    }
    return (
        <section>
            <h1 style={Stylesh1}>CHESSHUB</h1>
            <h3 style={Stylesh3}>Everything you need about chess</h3>
        </section>
    )
}

export default Logo