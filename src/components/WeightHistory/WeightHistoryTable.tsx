import { testWeights } from 'testData'

const WeightHistoryTable = () => {

	return (
		<table>
			<thead>
				<tr>
					<th>Data</th>
					<th>Peso</th>
				</tr>
			</thead>
			<tbody>
				{testWeights.map(data => {
					return (
						<tr>
							<td>{data.id}</td>
							<td>{data.weight}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)

}

export default WeightHistoryTable