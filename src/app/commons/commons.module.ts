import { NgModule, ModuleWithProviders } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { AgenciesService } from './services/agencies.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [ComponentsModule],
    exports: [ComponentsModule]
})
export class CommonsModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonsModule,
            providers: [
                AgenciesService
            ]
        };
    }
}
