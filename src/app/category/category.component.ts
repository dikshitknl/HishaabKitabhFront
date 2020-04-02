import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Column } from 'src/app/common/table/table.model';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  readonly columns: Column[] = [
    { name: 'name', label: 'Name', type: 'STRING' },
    { name: 'details', label: 'Details', type: 'STRING' },

  ];


  selectedCategory: Category;
  formModalActive = false;
  categories: Category[] = [];
  categoryFormGroup: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.prepareCategoryFormGroup();
  }

  onAddBtnClick(): void {
    this.selectedCategory = null;
    this.formModalActive = true;

  }
  onFormCancelBtnClick(): void {
    this.selectedCategory = null;
    this.formModalActive = false;
  }

  private prepareCategoryFormGroup(): void {
    this.categoryFormGroup = this.fb.group({
      name: new FormControl('', Validators.pattern(/^[a-zA-Z ]*$/)),
      details: new FormControl('', Validators.required),
    });
  }
}
