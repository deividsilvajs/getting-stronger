import { useContext, useState } from 'react'

import 'styles/weightHistory.css'

import HomePageButton from 'components/HomePageButton'
import WeightHistoryTable from 'components/WeightHistory/WeightHistoryTable'
import RecordWeightButton from 'components/WeightHistory/RecordWeightButton'
import RecordWeightForm from 'components/WeightHistory/RecordWeightForm'
import { WeightsContext } from 'WeightContext'

const WeightHistory = () => {

	const [weights, setWeights] = useContext(WeightsContext)
	const [showRecordWeightForm, setShowRecordWeightForm] = useState(false)

	return (
		<div className='container'>
			<HomePageButton />
			<WeightHistoryTable weights={weights} />
			<RecordWeightButton setShowRecordWeightForm={setShowRecordWeightForm} />
			{
				showRecordWeightForm
					? <RecordWeightForm
						weights={weights}
						setWeights={setWeights}
						setShowRecordWeightForm={setShowRecordWeightForm}
					/>
					: null
			}
		</div>
	)

}

export default WeightHistory