import { Package } from "./package.model";
import { AdditionalItem } from "./additional-item.model";

export class Inquiry{

    private title: string;
    private totalPrice: number;
    private userId: number;
    private carId: number;
    private packages: Package[];
    private additionalItems: AdditionalItem[];

    constructor(title:string, totalPrice:number, userId: number, carId: number, 
        packages: Package[], additionalItems: AdditionalItem[]){
            this.title = title;
            this.totalPrice = totalPrice;
            this.userId = userId;
            this.carId = carId;
            this.packages = packages;
            this.additionalItems = additionalItems;
    }

}