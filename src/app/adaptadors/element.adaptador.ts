import { ElementApiResponse, ElementCataleg } from "../models/element.model";

export function adaptarElementApi (apiRespostes: ElementApiResponse): ElementCataleg {
    return {
        id: apiRespostes.id,
        titol: apiRespostes.nom,
        descripcio: apiRespostes.descripcio,
        categoria: apiRespostes.categoria,
        preu: apiRespostes.preu,
        imatgeUrl: apiRespostes.imatge,
        esPopular: apiRespostes.popular,
        unitats: apiRespostes.stock,
    };
}

export function adaptarElementsApi (apiRespostes: ElementApiResponse[]): ElementCataleg[] {
    return apiRespostes.map(adaptarElementApi);
}