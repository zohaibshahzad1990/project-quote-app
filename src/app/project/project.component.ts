import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../../service/productservice';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/service/api.service';
import { Project, ProjectArray } from 'src/models/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectDialog: boolean = false;

  projects: Project[] = [];

  project: Project = {} as Project;

  selectedProjects: Project[] | null = [];

  submitted: boolean = false;

  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadAllProjects()
  }

  loadAllProjects() {
    this.apiService.getProjects().subscribe({
      next: (data: Project[]) => {

        this.projects = data
      }, // success path
      // error: error => this.error = error, // error path
    });
  }

  openNew() {
    this.project = {} as Project;
    this.submitted = false;
    this.projectDialog = true;
  }

  deleteSelectedProducts() {
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete the selected products?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.projects = this.projects.filter(val => !this.selectedProjects!.includes(val));
    //     this.selectedProjects = null;
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    //   }
    // });
  }

  editProject(project: Project) {
    this.project = { ...project };
    this.projectDialog = true;
  }
  navigateToProjectDetail(project: Project) {
    this.router.navigate([`/project/detail/${project.id}`]);
  }

  deleteProject(project: Project) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + project.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.DeleteProjectById(project.id).subscribe({
          next: (data: any) => {

            this.projects = this.projects.filter(val => val.id !== project.id);
            this.project = {} as Project;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Project Deleted', life: 3000 });
          }, // success path
          // error: error => this.error = error, // error path
        })

      }
    });
  }

  hideDialog() {
    this.projectDialog = false;
    this.submitted = false;
  }

  saveProject() {
    this.submitted = true;

    if (this.project!.name!.trim()) {
      if (this.project.id) {
        this.apiService.UpdateProjectById(this.project.id, this.project.name).subscribe({
          next: (data: any) => {
            //this.projects[this.findIndexById(this.project.id)] = this.project;
            this.loadAllProjects()
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          }
        });

      }
      else {
        this.apiService.createProject(this.project.name).subscribe({
          next: (data: any) => {
            this.loadAllProjects()
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          }
        });
        // this.apiService.createProject()
        // this.project.id = this.createId();
        // this.product.image = 'product-placeholder.svg';
        // this.products.push(this.product);
        // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      this.projects = [...this.projects];
      this.projectDialog = false;
      this.project = {} as any;
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

}
