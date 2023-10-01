const DeleteButton = () => {

    const DeleteButtonContent = () => {

        return (
            <div className='button-content'>
                <span id='delete-button-text'>Excluir</span>
                <img className='button-logo' src={require('../icons/trash.png')} alt='trash-icon' />
            </div>
        )

    }

    return (
        <button className='delete-button'>
            <DeleteButtonContent />
        </button>
    )
}

export default DeleteButton