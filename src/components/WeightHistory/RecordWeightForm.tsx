import Form from 'components/Forms/index'
import BackButton from 'components/BackButton'
import SaveButton from 'components/SaveButton'

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
					<input className='info-input' type='text' placeholder='Ex: 70.5' />
					<label>Selecione a data de pesagem:</label>
					<input className='info-input' type='date' />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<BackButton goBack={goBackToHomePage} />
						<SaveButton />
					</div>
				</form>
			</Form.Content>
		</Form.Container>
	)

}

export default RecordWeightForm