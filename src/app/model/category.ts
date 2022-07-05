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

export interface CategoryPosition {
    id: number;
    position: string
}