import { format, parseISO } from 'date-fns'

import DeleteButton from 'components/DeleteButton'

import { testWeights } from 'testData'

const WeightHistoryTable = () => {

	return (
		<div className='table-container'>
			<table>
				<thead>
					<tr>
						<th>Data</th>
						<th>Peso</th>
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