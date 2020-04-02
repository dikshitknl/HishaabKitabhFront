// import {Injectable} from '@angular/core';
// import {Actions, createEffect, ofType} from '@ngrx/effects';
// import {EMPTY} from 'rxjs';
// import {catchError, map, mergeMap} from 'rxjs/operators';
// import {setMemberData} from './app.action';
// import {MemberService} from './member/member.service';
// import {Store} from '@ngrx/store';
// import {AppState} from './app.model';

// @Injectable()
// export class AppEffect {

//     fetchMemberData$ = createEffect(() => {
//         return this.actions$.pipe(
//             ofType('[Member Component] Fetch Data'),
//             mergeMap(() => {
//                 this.store.dispatch(setMemberData({data: []}));
//                 return this.memberService.fetchData().pipe(
//                     map(val => setMemberData({data: val})),
//                     catchError(() => EMPTY)
//                 )
//             })
//         )
//     });

//     constructor(private readonly actions$: Actions,
//         private readonly store: Store<AppState>,
//         private readonly memberService: MemberService
//     ) {}
// }
