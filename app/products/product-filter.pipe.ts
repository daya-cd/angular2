import {PipeTransform,Pipe} from '@angular/core';
import {IProduct} from "./products";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filter: string): IProduct[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}