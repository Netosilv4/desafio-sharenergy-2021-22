export interface UserPowerPlants {
    usinaId: number;
    percentualDeParticipacao: number;
}

export interface JwtPayload {
    username: string;
    type: string;
}

export interface PlantStats {
    tempo_h: number;
    tensao_V: number;
    corrente_A: number;
    potencia_kW: number;
    temperatura_C: number;
}