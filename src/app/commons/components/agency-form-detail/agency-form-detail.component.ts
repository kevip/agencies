import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';
import { IAgency } from '../../interfaces/agency.interface';
import { AgencyFormDetailPresenter } from './agency-form-detail.presenter';
import { IAgencyRequest } from '../../interfaces/agency-request.interface';


@Component({
    selector: 'bcp-agency-form-detail',
    templateUrl: './agency-form-detail.component.html',
    styleUrls: ['./agency-form-detail.component.scss'],
    providers: [AgencyFormDetailPresenter],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyFormDetailComponent implements OnInit {

    lat: number;
    long: number;
    zoom = 1;

    @Input() agency: IAgency;

    @Output() updateAgency = new EventEmitter();

    constructor(public presenter: AgencyFormDetailPresenter) { }

    ngOnInit(): void {
        this.presenter.agencyForm.get('controlAddress').setValue(this.agency.address);
        this.presenter.agencyForm.get('controlDistrict').setValue(this.agency.district);
        this.presenter.agencyForm.get('controlName').setValue(this.agency.name);
        this.presenter.agencyForm.get('controlLatitude').setValue(this.agency.latitude);
        this.presenter.agencyForm.get('controlLongitude').setValue(this.agency.longitude);
        this.lat = this.agency.latitude;
        this.long = this.agency.longitude;
    }

    update(): void {
        if (this.presenter.agencyForm.valid) {
            const form = this.presenter.agencyForm.value;
            const agency: IAgencyRequest = {
                address: form.controlAddress,
                code: this.agency.code,
                district: form.controlDistrict,
                name: form.controlName,
                latitude: form.controlLatitude,
                longitude: form.controlLongitude,
            };
            this.updateAgency.emit(agency);
        }
    }
    markerDragEnd({lat, lng}: {lat: number, lng: number}): void {
        this.presenter.agencyForm.get('controlLatitude').setValue(lat);
        this.presenter.agencyForm.get('controlLongitude').setValue(lng);
    }

}
