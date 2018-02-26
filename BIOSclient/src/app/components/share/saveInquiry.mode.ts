import { InquiryPackage } from "./inquiryPackage.model";
import { AddItem } from "./addItem.model";

export class SaveInquiry {
    public carId: number;
    public vin: string;
    public totalPrice: number;
    public createdOn: Date;
    public modifiedOn: Date;
    public userId: number;
    public title: string;
    public inquiryPackage: InquiryPackage[];
    public addItems: AddItem[];

    constructor(carId: number, vin: string, totalPrice: number, createdOn: Date,
        modifiedOn: Date, userId: number, title: string, inquiryPackage: InquiryPackage[],
        addItems: AddItem[]) {
            this.carId = carId;
            this.vin = vin;
            this.totalPrice = totalPrice;
            this.createdOn = createdOn;
            this.modifiedOn = modifiedOn;
            this.userId = userId;
            this.title = title;
            this.inquiryPackage = inquiryPackage;
            this.addItems = addItems;
    }
    // constructor() {}
}
