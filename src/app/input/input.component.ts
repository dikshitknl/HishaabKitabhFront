import { Component, OnInit } from '@angular/core';
import {fetchMemberData,queryDatas} from '../app.action';
import { Store, select } from '@ngrx/store';
import {AppState} from 'src/app/app.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

 
constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
  }

  onInput($event: InputEvent): void {
    console.log($event.target['value']+"55555555555555");
    this.store.dispatch(queryDatas({query: $event.target['value']}));
    this.store.dispatch(fetchMemberData());

  }
}
