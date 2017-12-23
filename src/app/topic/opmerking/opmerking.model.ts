export class Opmerking {
    private _id: string;
    private _name: string;

    static fromJSON(json): Opmerking {
        const rec = new Opmerking(json.name);
        rec._id = json._id;
        return rec;
    }

    constructor(name: string) {
        this._name = name;
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name
        };
    }

}
