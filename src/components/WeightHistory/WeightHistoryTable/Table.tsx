import { format, parseISO } from 'date-fns'

import { Weights } from 'types/weight'

import DeleteButton from 'components/DeleteButton'

interface TableProps {
    weightBlocks: Weights[],
    currentBlockToShow: number
}

const Table = ({ weightBlocks, currentBlockToShow }: TableProps) => {

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
                            <td>{format(parseISO(data.id), 'dd/MM')}</td>
                            <td>{data.weight}kg</td>
                            <td><DeleteButton /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}

export default Table