import {createAction, props} from '@ngrx/store';
import {ProductDetails} from '../product-details.component.models';

export const fetchProducts = createAction('[PoductDetailsComponent] Fetch Data');
export const saveProducts = createAction('[PoductDetailsComponent] Save Data', props<{productDetails:ProductDetails}>());
export const setProducts = createAction('[PoductDetailsComponent] Set Data', props<{productDetails: ProductDetails[]}>());




