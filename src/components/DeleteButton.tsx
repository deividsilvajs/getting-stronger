const DeleteButton = () => {

    const DeleteButtonContent = () => {

        return (
            <div className='button-content'>
                <span id='delete-button-text'>Excluir</span>
                <img id='delete-button-logo' src={require('icons/trash.png')} alt='trash-icon' />
            </div>
        )

    }

    return (
        <button id='delete-button'>
            <DeleteButtonContent />
        </button>
    )
}

export default DeleteButton