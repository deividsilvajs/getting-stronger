import { useState } from 'react'

import 'styles/weightHistory.css'

import HomePageButton from 'components/HomePageButton'
import WeightHistoryChartButton from 'components/WeightHistory/WeightHistoryChartButton'
import WeightHistoryTable from 'components/WeightHistory/WeightHistoryTable'
import RecordWeightButton from 'components/WeightHistory/RecordWeightButton'
import RecordWeightForm from 'components/WeightHistory/RecordWeightForm'

const WeightHistory = () => {

	const [showRecordWeightForm, setShowRecordWeightForm] = useState(false)

	return (
		<div className='container'>
			<div className='header-buttons'>
				<HomePageButton />
				<WeightHistoryChartButton />
			</div>
			<WeightHistoryTable />
			<RecordWeightButton setShowRecordWeightForm={setShowRecordWeightForm} />
			{
				showRecordWeightForm
				? <RecordWeightForm />
				: null
			}
		</div>
	)

}

export default WeightHistory