import { FormControl } from '@angular/forms';

export class Control extends FormControl {
    protected textErrors: {[key: string]: string} = { };

    constructor(value = '', validators = []) {
        super(value, [...validators]);
    }

    get errorMessage(): string {
        let error = '';
        for (const err in this.errors) {
            if (err && this.touched) {
                error = this.textErrors[err];
            }
        }
        return error;
    }
    get state() {
        return this.valid || !this.touched ? '' : 'error';
    }
}
