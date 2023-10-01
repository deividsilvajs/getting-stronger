import HomePageButton from 'components/WeightHistory/HomePageButton'
import WeightHistoryTable from 'components/WeightHistory/WeightHistoryTable'
import RecordWeightButton from 'components/WeightHistory/RecordWeightButton'

const WeightHistory = () => {

	return (
		<div className='container'>
			<HomePageButton />
			<WeightHistoryTable />
			<RecordWeightButton />
		</div>
	)

}

export default WeightHistory