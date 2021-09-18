export interface ICategory {
    id: number;
    name: string;
    parent: number | null;
    children: ICategory[];
    isSelected: boolean;
}
