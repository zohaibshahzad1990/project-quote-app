import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Category, CategoryPosition } from '../model/category';

@Component({
  selector: 'app-addlineitem',
  templateUrl: './addlineitem.component.html',
  styleUrls: ['./addlineitem.component.css']
})
export class AddlineitemComponent implements OnInit {
  categories: Category[] = [];
  selectedCateory: Category = {} as Category;
  categoryPoistion: CategoryPosition[] = [];
  selectedCategoryPosition: CategoryPosition = {} as CategoryPosition;
  selectedPosition: any;
  marginLineItem: any;
  marginAmount: any;
  itemDescription: any;
  UOM: any;
  pricePerQuantity: any;
  quantity: any;
  waste: any;

  projectId: number = 0;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    // this.categories = [
    //   { name: 'New York', code: 'NY' },
    //   { name: 'Rome', code: 'RM' },
    //   { name: 'London', code: 'LDN' },
    //   { name: 'Istanbul', code: 'IST' },
    //   { name: 'Paris', code: 'PRS' }
    // ];
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.projectId = params['id'];
      this.apiService.getCatogory(this.projectId).subscribe({
        next: (data: Category[]) => {

          if (data.length > 0) {
            this.categories = data
          }
          else {
            this.loadEmptyCategory();
          }
        }, // success path
        // error: error => this.error = error, // error path
      });
    })

  }
  init() {
    this.loadEmptyCategory();
    this.loadEmptyCategoryPoistion();
  }
  loadEmptyCategory() {
    let emptyCategory: Category[] = [{ id: 0, name: 'none', categorypostions: [], categoryId: 0, createdOn: new Date(), projectId: 0, updatedOn: new Date(), project: null }]
    this.categories = emptyCategory;
  }
  loadEmptyCategoryPoistion() {
    let emptyCategory: CategoryPosition[] = [{ id: 0, position: 'none', }]
    this.categoryPoistion = emptyCategory;
  }
  onChangeCategory() {
    this.apiService.getCatogoryPostions(this.selectedCateory.id).subscribe({
      next: (data: CategoryPosition[]) => {

        if (data.length > 0) {
          this.categoryPoistion = data
          this.categoryPoistion.push({ id: 0, position: "none" })
        }
        else {
          this.loadEmptyCategoryPoistion();
        }
      }, // success path
      // error: error => this.error = error, // error path
    });
    console.log(this.selectedCateory)
  }
  handleSubmit(e: any) {

  }

}
