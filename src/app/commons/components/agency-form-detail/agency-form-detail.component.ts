import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IAgency } from '../../interfaces/agency.interface';
import { AgencyFormDetailPresenter } from './agency-form-detail.presenter';

@Component({
    selector: 'bcp-agency-form-detail',
    templateUrl: './agency-form-detail.component.html',
    styleUrls: ['./agency-form-detail.component.scss'],
    providers: [AgencyFormDetailPresenter],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyFormDetailComponent {

    @Input() agency: IAgency;

    constructor(public presenter: AgencyFormDetailPresenter) { }

    update(): void {
        console.log(this.presenter.controlName);
    }

}
