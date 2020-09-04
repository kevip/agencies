import { FormControl, Validators } from '@angular/forms';
import { Control } from './control';
import { errorMessages } from 'src/app/commons/enums/error-messages.enum';

export class NameControl extends Control {

    constructor(value = '') {
        super(value, [Validators.required, Validators.maxLength(100)]);
        this.textErrors = {
            required: errorMessages.required,
            maxlength: errorMessages.maxLength
        };
    }

}
