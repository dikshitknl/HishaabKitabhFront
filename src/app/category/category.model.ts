export interface Category{
	id: number;
	name:string;
	details:string;
}

export interface CategoryComponentState {
	categories:Category[];
}