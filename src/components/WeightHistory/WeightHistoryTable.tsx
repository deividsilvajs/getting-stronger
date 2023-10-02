import { format, parseISO } from 'date-fns'

import WeightDate from './WeightHistoryTable/WeightDate'
import Weight from './WeightHistoryTable/Weight'
import DeleteButton from 'components/DeleteButton'

import { testWeights } from 'testData'

const WeightHistoryTable = () => {

	return (
		<div className='table-container'>
			<table>
				<thead>
					<tr>
						<th><WeightDate /></th>
						<th><Weight /></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{testWeights.map(data => {
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