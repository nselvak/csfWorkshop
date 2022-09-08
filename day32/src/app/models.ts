import { FormArray } from "@angular/forms"

export interface Orderlist {
    name: string 
    mobile: number
    itemList: ArrayCtrl[]
}

export interface ArrayCtrl {
    item: string
    quantity: number
}