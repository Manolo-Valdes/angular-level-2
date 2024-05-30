
export const MODELS:string[] = ['3' , 'C' , 'S' , 'X' , 'Y'];

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

export interface iTeslaOption extends iapiTeslaOption
{
    code: string,
}

export interface iapiTeslaOption
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