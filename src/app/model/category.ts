export interface Category {
    id: number;
    name: string;
    createdOn: Date;
    updatedOn: Date;
    projectId: number;
    categoryId: number;
    project?: any;
    categorypostions: any[];
}