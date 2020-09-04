import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { IAgency } from '../interfaces/agency.interface';
import { AgenciesFacade } from '../facades/agencies.facade';


@Injectable()
export class AgencyResolver implements Resolve<IAgency> {

    constructor(private agenciesFacade: AgenciesFacade) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IAgency> {

        return this.agenciesFacade.getAgency(route.params.code);
    }
}
