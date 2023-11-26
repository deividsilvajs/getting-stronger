import { useState } from 'react'

import { Weight, Weights } from 'types/weight'

import Form from 'components/Forms/index'
import BackButton from 'components/BackButton'
import SaveButton from 'components/SaveButton'

interface RecordWeightFormProps {
	setWeights: React.Dispatch<React.SetStateAction<Weights>>
	setShowRecordWeightForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RecordWeightForm = ({ setWeights, setShowRecordWeightForm }: RecordWeightFormProps) => {

	const [date, setDate] = useState('')
	const [weight, setWeight] = useState('')

	const addWeight = () => {

		const data: Weight = {
			id: date,
			weight: Number(weight)
		}

		setWeights(weights => [...weights, data])
		setShowRecordWeightForm(false)

	}

	const goBackToHomePage = () => {
		setShowRecordWeightForm(false)
	}

	return (
		<Form.Container>
			<Form.Content>
				<h2 style={{ marginBottom: 12 }}>Novo Peso</h2>
				<form onSubmit={e => {
					e.preventDefault()
					addWeight()
				}}>
					<label>Digite o peso:</label>
					<input onChange={e => setWeight(e.target.value)} className='info-input' type='text' placeholder='Ex: 70.5' required />
					<label>Selecione a data de pesagem:</label>
					<input onChange={e => setDate(e.target.value)} className='info-input' type='date' required />
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