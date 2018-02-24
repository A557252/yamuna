export class SparePart {
    public spareId: number;
    public spareName: string; 
    public sparePrice: number;
    
    constructor(spareId: number, spareName: string, sparePrice: number) {
        this.spareId = spareId;
        this.spareName = spareName;
        this.sparePrice = sparePrice;
    }
}