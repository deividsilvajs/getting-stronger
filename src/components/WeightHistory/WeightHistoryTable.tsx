import { testWeights } from 'testData'

const WeightHistoryTable = () => {

	return (
		<div className='table-container'>
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
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>{data.weight}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)

}

export default WeightHistoryTable