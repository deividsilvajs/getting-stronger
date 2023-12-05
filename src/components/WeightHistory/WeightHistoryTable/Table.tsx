import { format, parseISO } from 'date-fns'

import { SetWeights, Weights } from 'types/weight'

import DeleteButton from 'components/DeleteButton'

interface TableProps {
    setWeights: SetWeights
    weightBlocks: Weights[],
    currentBlockToShow: number
}

const Table = ({ setWeights, weightBlocks, currentBlockToShow }: TableProps) => {

    const deleteWeight = (id: string) => {

        setWeights(weights => {

            return weights.filter(weight => {
                return weight.id !== id
            })

        })

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