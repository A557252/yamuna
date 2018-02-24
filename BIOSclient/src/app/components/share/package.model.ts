import { SparePart } from './spare-part.model';
import { LabourPosition } from './labour-position.model';

export class Package {

    public packageId: number;
    public packageName: string;
    public price: number;
    public description: string;
    public isActive: string;
    public spareParts: SparePart[];
    public labourPositions: LabourPosition[];

    constructor(packageId: number, packageName: string,
        price: number, description: string, spareParts: SparePart[],
        labourPositions: LabourPosition[]) {
            this.packageId = packageId;
            this.packageName = packageName;
            this.price = price;
            this.description = description;
            this.spareParts = spareParts;
            this.labourPositions = labourPositions;
        }

}
