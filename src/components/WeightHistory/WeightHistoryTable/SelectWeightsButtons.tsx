interface SelectWeightsButtonsProps {
	setCurrentBlockToShow: React.Dispatch<React.SetStateAction<number>>
}

const SelectWeightsButtons = ({ setCurrentBlockToShow }: SelectWeightsButtonsProps) => {
	
	return (
		<div id='select-buttons'>
			<button 
				onClick={() => setCurrentBlockToShow(currentBlock => currentBlock - 1)} 
				style={{marginRight: 8}} className='select-button'>Anterior</button>
			<button 
				onClick={() => setCurrentBlockToShow(currentBlock => currentBlock + 1)} 
				className='select-button'>Próximo</button>
		</div>
	)

}

export default SelectWeightsButtons