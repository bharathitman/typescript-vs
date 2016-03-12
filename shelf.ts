interface ShelfItem {
    
    title: string;
}

export default class Shelf<T extends ShelfItem> {
    
    private _item: Array<T> = new Array<T>();
    
    add(item: T): void {
        this._item.push(item);
    }
    
    getFirst(): T {
        return this._item[0];
    }
    
    find(title: string): T {
        return this._item.filter(it => it.title === title)[0];
    }
    
    printTitles(): void {
        this._item.forEach(it => console.log(it.title));
    }


}