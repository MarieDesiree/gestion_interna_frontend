export interface Activity {

    activity: string;
    hotel: number;
    plage: number;
    restaurant: number;
    garage_lavage: number;
    regidence: number;
    entreprise: number;
    marketers: number;
    visitors: number;
}


export interface Licence {
    Silenceko: string;
    Silenceka: number;
}



export class LicenceG {
    Silenceko: string;
    Silenceka: string;
    Auteur: string;
    Auteta: string;
    used?: Number;
    Liceeta?: string;
    actimotif?: string;
    defverson?: string;
    capacity: number;
    Licetyp: string;// free or bouth
    compu: string;
    logcount: number;
    create_tim?: string;



    constructor(silenceko: string, silenceka: string, Auteur: string, Auteta: string, capacity: number,  Licetyp: string, compu: string, logcount: number) {
        this.Silenceko = silenceko;
        this.Silenceka = silenceka;
        this.Auteur = Auteur;
        this.Auteta = Auteta;
        this.capacity = capacity;
        this.Licetyp = Licetyp;
        this.compu = compu;
        this.logcount = logcount;
    }
}

