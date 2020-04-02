import { createAction, props } from '@ngrx/store';
import {SellDetails} from '../sellDetails.component.models';

export const fetchSell = createAction('[SellDetails Component] Fetch Data');
export const saveSell = createAction('[SellDetails Component] Fetch Data', props<{selldetails: SellDetails}>());
export const setSell = createAction('[SellDetails] Set Data', props<{sellDetails: SellDetails[]}>());
export const setCustomerId = createAction('[Customer Id] Set Customer Data', props<{custId: number}>());