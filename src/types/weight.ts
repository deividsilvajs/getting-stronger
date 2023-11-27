export interface Weight {
    id: string
    weight: number
}

export type Weights = Weight[]

export type SetWeights = React.Dispatch<React.SetStateAction<Weights>>

export type WeightsState = [Weights, SetWeights]