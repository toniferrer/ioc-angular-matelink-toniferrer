export interface ElementApiResponse {
    id: number;
    nom: string;
    descripcio: string;
    categoria: string;
    preu: number;
    imatge: string;
    popular: boolean;
    stock: number;
}

export interface ElementCataleg {
    id: number;
    titol: string;
    descripcio: string;
    categoria: string;
    preu: number;
    imatgeUrl: string;
    esPopular: boolean;
    unitats: number;
    notes?: string [];
}