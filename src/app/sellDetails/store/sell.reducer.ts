import { SellDetails, CustomerIdState } from "../sellDetails.component.models";
import { setSell, setCustomerId } from "./sell.action";
import { createReducer, on, State } from "@ngrx/store";

export const SellDetailsComponentInitialState: SellDetails[] = [];
export const SetCustomerIdInitialState: CustomerIdState= {
    custumerId: null
};

export const sellComponentReducer = createReducer(
  SellDetailsComponentInitialState,
  on(setSell, (state, action) => action.sellDetails)
);

export const customerIdReducer = createReducer(
  SetCustomerIdInitialState,
  on(setCustomerId, (state, action) => {
    return {
        ...state,
        customerId: action.custId
    };
  })
);
