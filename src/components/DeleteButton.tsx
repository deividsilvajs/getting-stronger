interface DeleteButtonProps {
    onClick?: () => void
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {

    return (
        <button onClick={onClick}>
            <img
                style={{ marginTop: 2 }}
                width={18}
                src={require('assets/icons/trash.png')} alt='Excluir'
            />
        </button>
    )
}

export default DeleteButton