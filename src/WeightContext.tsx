import { createContext, useState } from 'react'

import { Weights, WeightsState } from 'types/weight'

import { weights as testWeights } from 'testWeights'

const DEFAULT_VALUE: WeightsState = [
    [{ id: '', weight: 0 }],
    () => { }
]

export const WeightsContext = createContext<WeightsState>(DEFAULT_VALUE)

interface WeightsProviderProps {
    children: React.ReactNode
}

const WeightsProvider = ({ children }: WeightsProviderProps) => {

    const [weights, setWeights] = useState<Weights>(testWeights)

    return (
        <WeightsContext.Provider value={[weights, setWeights]}>
            {children}
        </WeightsContext.Provider>
    )

}

export default WeightsProvider