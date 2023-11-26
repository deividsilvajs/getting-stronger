import { useState } from 'react'

import 'styles/weightHistory.css'

import { Weights } from 'types/weight'

import HomePageButton from 'components/HomePageButton'
import WeightHistoryTable from 'components/WeightHistory/WeightHistoryTable'
import RecordWeightButton from 'components/WeightHistory/RecordWeightButton'
import RecordWeightForm from 'components/WeightHistory/RecordWeightForm'

const WeightHistory = () => {

	const [weights, setWeights] = useState<Weights>([])
	const [showRecordWeightForm, setShowRecordWeightForm] = useState(false)

	return (
		<div className='container'>
			<HomePageButton />
			<WeightHistoryTable />
			<RecordWeightButton setShowRecordWeightForm={setShowRecordWeightForm} />
			{
				showRecordWeightForm
				? <RecordWeightForm 
						setWeights={setWeights}
						setShowRecordWeightForm={setShowRecordWeightForm} 
					/>
				: null
			}
		</div>
	)

}

export default WeightHistory