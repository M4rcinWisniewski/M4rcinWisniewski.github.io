import ResponsiveAppBar from '../components/NavBard'
import Form from '../components/Form'



const LogInForm = () => {
    return (
        <>
            <ResponsiveAppBar />
            <form style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                opacity: '99%',
                width: '100vw',
                background: '#080808'
               
                
                }}>
            <div style={{
                backgroundColor: '#eeefff',
                width: '25vw',
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                padding: '15px',
                borderRadius: '20px'
                
                
            }}>
                <Form />
            </div>
            </form>

        </>

    )
}

export default LogInForm 