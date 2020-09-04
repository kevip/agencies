import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NameControl } from './controls/name.control';
import { AddressControl } from './controls/address.control';
import { DistrictControl } from './controls/district.control';

@Injectable()
export class AgencyFormDetailPresenter {
    controlName = new NameControl();
    controlAddress = new AddressControl();
    controlDistrict = new DistrictControl();
    controlLatitude = new FormControl('');
    controlLongitude = new FormControl('');

    agencyForm = new FormGroup({
        controlName: this.controlName,
        controlAddress: this.controlAddress,
        controlDistrict: this.controlDistrict,
        controlLatitude: this.controlLatitude,
        controlLongitude: this.controlLongitude
    });

}
