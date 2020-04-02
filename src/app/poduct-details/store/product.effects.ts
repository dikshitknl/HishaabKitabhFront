import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AppState} from '../../app.model';
import {ProductDetails} from '../product-details.component.models';
import {fetchProducts,setProducts} from './product.action';

@Injectable({
    providedIn: "root"
})
export class ProductDetailsComponentEffect {

   fetchProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[PoductDetailsComponent] Fetch Data'),
            mergeMap(() => {
                const url = "http://localhost:8080/product-details";
                return this.httpClient.get<ProductDetails[]>(url).pipe(
                    map(val => setProducts({productDetails: val})),
                    catchError(() => EMPTY)
                );
            })
        )
    });

    saveProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[PoductDetailsComponent] Save Data'),
            mergeMap((action: any) => {
                const url ="http://localhost:8080/product-details";
                return this.httpClient.post<ProductDetails>(url, action.productDetails).pipe(
                    map(() => fetchProducts()),
                    catchError(() => EMPTY)
                );
            })
        )
    });

    constructor(private readonly actions$: Actions, private readonly store: Store<AppState>, private readonly httpClient: HttpClient) {}
}
