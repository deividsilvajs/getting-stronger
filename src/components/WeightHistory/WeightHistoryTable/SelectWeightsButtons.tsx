import { useEffect, useState } from 'react'
import { Weights } from 'types/weight'

interface SelectWeightsButtonsProps {
	weightBlocks: Weights[]
	currentBlockToShow: number
	setCurrentBlockToShow: React.Dispatch<React.SetStateAction<number>>
}

type Visibility = 'visible' | 'hidden' | 'collapse'

const SelectWeightsButtons = ({ weightBlocks, currentBlockToShow, setCurrentBlockToShow }: SelectWeightsButtonsProps) => {

	const [previousVisibility, setPreviousVisibility] = useState<Visibility>('hidden')
	const [nextVisibility, setNextVisibility] = useState<Visibility>('hidden')

	useEffect(() => {
		if (currentBlockToShow > 0) {
			setPreviousVisibility('visible')
			if (currentBlockToShow === weightBlocks.length - 1) {
				setNextVisibility('hidden')
			} else {
				setNextVisibility('visible')
			}
		} else {
			setPreviousVisibility('hidden')
			if (weightBlocks.length > 1 ) {
				setNextVisibility('visible')
			}
		}
	}, [currentBlockToShow, weightBlocks])

	return (
		<div className='buttons-group'>
			<button
				onClick={() => setCurrentBlockToShow(currentBlock => currentBlock - 1)}
				style={{ marginRight: 8, visibility: previousVisibility }} className='select-button'>{'<< Anterior'}</button>
			<button
				onClick={() => setCurrentBlockToShow(currentBlock => currentBlock + 1)}
				style={{ visibility: nextVisibility }} className='select-button'>{'Próximo >>'}</button>
		</div>
	)

}

export default SelectWeightsButtons