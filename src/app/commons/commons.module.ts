import { NgModule, ModuleWithProviders } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { AgenciesService } from './services/agencies.service';
import { AgenciesFacade } from './facades/agencies.facade';
import { StorageService } from './services/storage.service';
import { AgencyResolver } from './resolvers/agency.resolver';

@NgModule({
    imports: [ComponentsModule],
    exports: [ComponentsModule]
})
export class CommonsModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonsModule,
            providers: [
                AgenciesService,
                AgenciesFacade,
                AgencyResolver,
                StorageService
            ]
        };
    }
}
