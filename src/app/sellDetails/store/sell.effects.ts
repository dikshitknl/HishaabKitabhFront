import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AppState} from '../../app.model';
import {environment} from '../../../environments/environment';
import {SellDetails} from '../sellDetails.component.models';
import {fetchSell,setSell} from './sell.action';

@Injectable({
    providedIn: "root"
})
export class SellDetailsComponentEffect {

   fetchsells$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[SellDetails Component] Fetch Data'),
            mergeMap(() => {
                const url = "http://localhost:8080/sell-details";
                return this.httpClient.get<SellDetails[]>(url).pipe(
                    map(val => setSell({sellDetails: val})),
                    catchError(() => EMPTY)
                );
            })
        )
    });

    savesell$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[SellDetails Component] Save Data'),
            mergeMap((action: any) => {
                const url ="http://localhost:8080/sell-details";
                return this.httpClient.post<SellDetails>(url, action.sellDetails).pipe(
                    map(() => fetchSell()),
                    catchError(() => EMPTY)
                );
            })
        )
    });

    constructor(private readonly actions$: Actions, private readonly store: Store<AppState>, private readonly httpClient: HttpClient) {}
}
