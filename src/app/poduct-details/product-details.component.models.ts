import { Brand } from '../brand/brand.component.models';
import { Vendor } from '../vendor/vendor.component.models';
import { Category } from '../category/category.model';

export interface ProductDetails {
    id: number;
    name: string;
    brand: Brand;
    brandName: string;
    vendor:Vendor;
    vendorName: string;
    category: Category;
    categoryName: string;
    barCode: string;
    mfgDate: Date;
    expDate: Date;
    qty: number;
    unit: string;
    costRate: number;
    profitMargin: number;
    sellRate: number;
}