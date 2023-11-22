import { format, parseISO } from 'date-fns'

import { Weights } from 'types/weight'

import SelectWeightsButtons from './WeightHistoryTable/SelectWeightsButtons'
import DeleteButton from 'components/DeleteButton'

import { testWeights } from 'testData'

const WeightHistoryTable = () => {

	const WeightBlocks = () => {
		const blocks: Weights = []
		testWeights.forEach(weight => {
			if (blocks.length < 8) {
				blocks.push(weight)
			}
		})
		return blocks
	}

	return (
		<div className='table-container'>
			<SelectWeightsButtons />
			<table>
				<thead>
					<tr>
						<th>Data</th>
						<th>Peso</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{WeightBlocks().map(data => {
						return (
							<tr key={data.id}>
								<td>{format(parseISO(data.id), 'dd/MM')}</td>
								<td>{data.weight}kg</td>
								<td><DeleteButton /></td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)

}

export default WeightHistoryTable