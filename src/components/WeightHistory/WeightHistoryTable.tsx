import { useState } from 'react'
import { format, parseISO } from 'date-fns'

import { Weights } from 'types/weight'

import SelectWeightsButtons from './WeightHistoryTable/SelectWeightsButtons'
import DeleteButton from 'components/DeleteButton'

import { testWeights } from 'testData'

const WeightHistoryTable = () => {

	const [currentBlockToShow, setCurrentBlockToShow] = useState(0)

	const weightBlocks = () => {
		let currentBlock = 0
		const blocks: Weights[] = [[]]
		testWeights.forEach(weight => {
			if (blocks[currentBlock].length < 6) {
				blocks[currentBlock].push(weight)
			} else {
				currentBlock++
            	blocks[currentBlock] = [weight]
			}
		})
		return blocks
	}

	return (
		<div className='table-container'>
			<SelectWeightsButtons
				setCurrentBlockToShow={setCurrentBlockToShow}
			/>
			<table>
				<thead>
					<tr>
						<th>Data</th>
						<th>Peso</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{weightBlocks()[currentBlockToShow].map(data => {
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