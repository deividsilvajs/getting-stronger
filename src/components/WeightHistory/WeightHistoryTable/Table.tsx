import { format, parseISO } from 'date-fns'

import { Weights } from 'types/weight'

import DeleteButton from 'components/DeleteButton'
import { useContext } from 'react'
import { WeightsContext } from 'WeightContext'

interface TableProps {
    weightBlocks: Weights[],
    currentBlockToShow: number
}

const Table = ({ weightBlocks, currentBlockToShow }: TableProps) => {

    const [weights, setWeights] = useContext(WeightsContext)

    const deleteWeight = (id: string) => {
        const otherWeights = weights.filter(weight => {
            return weight.id !== id
        })
        setWeights(otherWeights)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Peso</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {weightBlocks[currentBlockToShow].map(data => {
                    return (
                        <tr key={data.id}>
                            <td>
                                {format(parseISO(data.id), 'dd/MM')}
                            </td>
                            <td>{data.weight}kg</td>
                            <td>
                                <DeleteButton
                                    onClick={() => deleteWeight(data.id)}
                                />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}

export default Table