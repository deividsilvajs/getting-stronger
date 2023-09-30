import WeightHistoryHeader from 'components/WeightHistory/WeightHistoryHeader'
import WeightHistoryTable from 'components/WeightHistory/WeightHistoryTable'
import RecordWeightButton from 'components/WeightHistory/RecordWeightButton'

const WeightHistory = () => {

	return (
		<div>
			<WeightHistoryHeader />
			<WeightHistoryTable />
			<RecordWeightButton />
		</div>
	)

}

export default WeightHistory