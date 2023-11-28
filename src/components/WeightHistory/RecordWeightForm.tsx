import { useContext, useState, useEffect } from 'react'

import { Weight } from 'types/weight'

import Form from 'components/Forms/index'
import BackButton from 'components/BackButton'
import SaveButton from 'components/SaveButton'

import { WeightsContext } from 'WeightContext'

interface RecordWeightFormProps {
	setShowRecordWeightForm: React.Dispatch<React.SetStateAction<boolean>>
}

const RecordWeightForm = ({ setShowRecordWeightForm }: RecordWeightFormProps) => {

	const [weights, setWeights] = useContext(WeightsContext)

	const [date, setDate] = useState('')
	const [weight, setWeight] = useState('')

	useEffect(() => {

		if (weight.includes(',')) {

			setWeight(weight.replace(',', '.'))

		}

	}, [weight])

	const validId = (id: string) => {

		const repeated = weights.map(weight => {

			return weight.id === id

		})

		if (repeated[0]) {

			return false

		} else {

			return true

		}

	}

	const validWeight = (inputWeight: string) => {

		const regex = /^[0-9.]+$/

		if (regex.test(inputWeight)) {

			return true

		} else {

			return false

		}
	}


	const addWeight = () => {

		if (validId(date)) {

			if (validWeight(weight)) {

				const data: Weight = {
					id: date,
					weight: Number(weight)
				}

				setWeights(weights => {
					const orderedWeights = [...weights, data]
						.sort((a, b) => a.id.localeCompare(b.id))
					return orderedWeights
				})

				setShowRecordWeightForm(false)

			} else {

				alert('Insira um peso válido!')

			}

		} else {

			alert('Já existe um peso registrado nessa data!')

		}

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