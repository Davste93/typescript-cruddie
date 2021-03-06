import { Model } from "../model/Model";
import { List } from "../../classes/helper/List";
export interface DataRepository<T extends Model> {
    getModelType(): {
        new (): any;
    };
    find(modelID: string): Promise<T>;
    exists(modelID: string): Promise<boolean>;
    findAll(): Promise<List<T>>;
    findAllWith(query: string): Promise<List<T>>;
    getRange(modelIDList: List<string>): Promise<List<T>>;
    count(): number;
    addItem(modelItem: T): Promise<T>;
    removeItem(modelID: string): Promise<T>;
    saveItem(modelItem: T, modelID: string): Promise<T>;
}
