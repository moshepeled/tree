export class Contacts {
    id: number;
    name: string;
    type: string;
    contacts?: Array<Contacts>;
    expanded?: boolean;

    constructor() {
        this.expanded = false;
    }

}
