import {ActionReducerMap, createReducer} from '@ngrx/store';
import {AppState, Message} from './app.model';
import {productComponentReducer} from 'src/app/poduct-details/store/product.reducer';
import { sellComponentReducer, customerIdReducer } from './sellDetails/store/sell.reducer';

export const appReducer: ActionReducerMap<AppState> = {
    productDetails: productComponentReducer,
    sellDetails: sellComponentReducer,
    customerId: customerIdReducer
};

export const SetMessageInitialState: Message= {
    message: ""
};

