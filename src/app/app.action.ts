import {createAction, props} from '@ngrx/store';

export const queryDatas = createAction('[Input Component] Query Data Text', props<{query: string}>());
export const fetchMemberData = createAction('[Member Component] Fetch Data');
export const setMemberData = createAction('[Member Component] Set Data', props<{data: {id: number, name: string, address: string, pn: string, bg: string }[]}>());
// export const setMessage = createAction('[Message] Set Customer Data', props<{message: string}>());