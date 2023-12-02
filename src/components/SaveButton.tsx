const SaveButton = () => {

	const style: React.CSSProperties = {
		padding: 6,
		borderRadius: '0 0 6px 0'
	}

	return (
		<button
			style={style}
			className='success-button' type='submit'>
			Salvar
		</button>
	)

}

export default SaveButton