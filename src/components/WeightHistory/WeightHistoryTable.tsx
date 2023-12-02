import { useContext, useState } from 'react'

import { Weights } from 'types/weight'

import SelectWeightsButtons from './WeightHistoryTable/SelectWeightsButtons'
import Table from './WeightHistoryTable/Table'
import ConfirmDeleteWeight from './WeightHistoryTable/ConfirmDeleteWeight'

import { WeightsContext } from 'WeightContext'

const WeightHistoryTable = () => {

	const [weights] = useContext(WeightsContext)

	const [currentBlockToShow, setCurrentBlockToShow] = useState(0)
	const [showConfirmDeleteWeight, setShowConfirmDeleteWeight] = useState(false)

	const weightBlocks = () => {
		let currentBlock = 0
		const blocks: Weights[] = [[]]
		weights.forEach(weight => {
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
				weightBlocks={weightBlocks()}
				currentBlockToShow={currentBlockToShow}
				setCurrentBlockToShow={setCurrentBlockToShow}
			/>
			<Table
				weightBlocks={weightBlocks()}
				currentBlockToShow={currentBlockToShow}
				setShowConfirmDeleteWeight={setShowConfirmDeleteWeight}
			/>
			{
				showConfirmDeleteWeight
				? <ConfirmDeleteWeight 
						setShowConfirmDeleteWeight={setShowConfirmDeleteWeight}
					/>
				: null
			}
		</div>
	)

}

export default WeightHistoryTable