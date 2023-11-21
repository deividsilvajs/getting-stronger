import 'styles/weightHistory.css'

import HomePageButton from 'components/HomePageButton'
import WeightHistoryChartButton from 'components/WeightHistory/WeightHistoryChartButton'
import WeightHistoryTable from 'components/WeightHistory/WeightHistoryTable'
import RecordWeightButton from 'components/WeightHistory/RecordWeightButton'

const WeightHistory = () => {

	return (
		<div className='container'>
			<div className='header-buttons'>
				<HomePageButton />
				<WeightHistoryChartButton />
			</div>
			<WeightHistoryTable />
			<RecordWeightButton />
		</div>
	)

}

export default WeightHistory