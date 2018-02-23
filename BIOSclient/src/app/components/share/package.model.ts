import { SparePart } from './spare-part.model';
import { LabourPosition } from './labour-position.model';

export class Package {

    private packageId: number;
    private packageName: string;
    private price: number;
    private description: string;
    private spareParts: SparePart[];
    private labourPositions: LabourPosition[];

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
