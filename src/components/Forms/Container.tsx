interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {

    const formContainer: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={formContainer}>
            {children}
        </div>
    )

}

export default Container