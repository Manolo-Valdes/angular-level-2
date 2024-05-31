
export interface iTeslaCar
{ 
    code: string,
    description: string,
    colors: iTeslaColor[]
}

export interface iTeslaColor
{
    code:string,
    description:string,
    price: number
}

export interface iTeslaOption
{
    configs: iTeslaConfig[],
    towHitch: boolean,
    yoke: boolean
}

export interface iTeslaConfig
{
    id: number,
    description: string,
    range: number,
    speed: number,
    price: number
}