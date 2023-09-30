import WeightHistoryTable from 'components/WeightHistory/WeightHistoryTable'
import RecordWeightButton from 'components/WeightHistory/RecordWeightButton'

const WeightHistory = () => {

	return (
		<div className='container'>
			<WeightHistoryTable />
			<RecordWeightButton />
		</div>
	)

}

export default WeightHistory