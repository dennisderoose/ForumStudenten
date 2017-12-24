export class Opmerking {
    private _id: string;
    private _name: string;

    static fromJSON(json): Opmerking {
        console.log(json);
        const rec = new Opmerking(json.id,json.name);
        rec._id = json._id;

        return rec;
    }

    constructor(id:string, name:string) {
        this._id = id;
        this._name = name;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    toJSON() {
        console.log(this._name);
        return {
            _id: this._id,
            name: this._name
        };
    }

}
