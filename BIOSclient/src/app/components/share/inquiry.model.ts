import { Package } from "./package.model";
import { AdditionalItem } from "./additional-item.model";

export class Inquiry{

    public title: string;
    public totalPrice: number;
    public userId: number;
    public carId: number;
    public packages: Package[];
    public additionalItems: AdditionalItem[];

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