export class DocumentDescription {
    #description = '';
    #link = '';

    constructor(description, link) {
        this.#description = description;
        this.#link = link;
    }

    get description() {
        return this.#description;
    }

    get link() {
        return this.#link;
    }
}