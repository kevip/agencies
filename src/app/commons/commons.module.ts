import { NgModule, ModuleWithProviders } from '@angular/core';
import { ComponentsModule } from './components/components.module';

@NgModule({
    imports: [ComponentsModule],
    exports: [ComponentsModule]
})
export class CommonsModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonsModule,
            providers: [

            ]
        };
    }
}
