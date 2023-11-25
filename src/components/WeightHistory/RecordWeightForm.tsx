import Form from 'components/Forms/index'

interface RecordWeightFormProps {
	setShowRecordWeightForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RecordWeightForm = ({ setShowRecordWeightForm }: RecordWeightFormProps) => {

	return (
		<Form.Container>
			<Form.Content>
				<h2 style={{ marginBottom: 12 }}>Novo Peso</h2>
				<form>
					<input className='info-input' type='text' placeholder='Digite o peso' />
					<input className='info-input' type='date' />
					<div className='buttons-group'>
						<button onClick={() => setShowRecordWeightForm(false)} className='cancel-button' type='button'>
							Voltar
						</button>
						<button style={{ padding: 6, borderRadius: '0 0 6px 0' }} className='success-button' type='submit'>Salvar</button>
					</div>
				</form>
			</Form.Content>
		</Form.Container>
	)

}

export default RecordWeightForm