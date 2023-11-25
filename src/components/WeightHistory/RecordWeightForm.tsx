const RecordWeightForm = () => {

	return (
		<div className='form-container'>
			<div className='card-container'>
				<h1 style={{marginBottom: 12}}>Registrar Peso</h1>
				<form>
					<input className='info-input' type='text' placeholder='Digite o peso' />
					<input className='info-input' type='date' />
					<div style={{marginBottom: 8}}>
						<input type='submit' value='Registrar' />
						<input type='button' value='Cancelar' />
					</div>
				</form>
			</div>
		</div>
	)

}

export default RecordWeightForm