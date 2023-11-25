import Form from 'components/Forms/index'
import BackButton from 'components/BackButton'

interface RecordWeightFormProps {
	setShowRecordWeightForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RecordWeightForm = ({ setShowRecordWeightForm }: RecordWeightFormProps) => {

	const goBackToHomePage = () => {
		setShowRecordWeightForm(false)
	}

	return (
		<Form.Container>
			<Form.Content>
				<h2 style={{ marginBottom: 12 }}>Novo Peso</h2>
				<form>
					<label>Digite o peso:</label>
					<input className='info-input' type='text' />
					<label>Selecione a data de pesagem:</label>
					<input className='info-input' type='date' />
					<div className='buttons-group'>
						<BackButton goBack={goBackToHomePage} />
						<button style={{ padding: 6, borderRadius: '0 0 6px 0' }} className='success-button' type='submit'>Salvar</button>
					</div>
				</form>
			</Form.Content>
		</Form.Container>
	)

}

export default RecordWeightForm