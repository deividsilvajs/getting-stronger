const WeightHistoryTable = () => {

	const testData = [
		{ id: '2023-09-01', weight: 70 },
		{ id: '2023-09-02', weight: 70 },
		{ id: '2023-09-03', weight: 70 },
		{ id: '2023-09-04', weight: 70 },
		{ id: '2023-09-05', weight: 70 },
		{ id: '2023-09-06', weight: 70 },
		{ id: '2023-09-07', weight: 70 },
		{ id: '2023-09-08', weight: 70 },
		{ id: '2023-09-09', weight: 70 },
		{ id: '2023-09-10', weight: 70 },
	]

	return (
		<table>
			<thead>
				<tr>
					<th>Peso</th>
					<th>Data</th>
				</tr>
			</thead>
			<tbody>
				{testData.map(data => {
					return (
						<tr>
							<td>{data.weight}</td>
							<td>{data.id}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)

}

export default WeightHistoryTable