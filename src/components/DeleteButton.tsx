const DeleteButton = () => {

    const style: React.CSSProperties = {
        backgroundColor: '#DC3545',
        color: 'var(--light-text)',
        padding: '5px',
        borderRadius: '6px',
        fontWeight: 'normal'
    }

    return (
        <button style={style}>
            Excluir
        </button>
    )
}

export default DeleteButton