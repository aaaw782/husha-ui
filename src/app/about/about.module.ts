import { NgModule } from '@angular/core';
import { AboutComponent }   from './about.component';
import { ExplanationComponent }   from './explanation/explanation.component';
import { ConventionComponent }   from './convention/convention.component';
import { BuildComponent }   from './build/build.component';
import { SharedModule }   from '../shared/shared.module';

import { routing } from './about.routing';
@NgModule({
    imports: [routing,SharedModule],
    providers:[],
    declarations: [AboutComponent,ExplanationComponent,ConventionComponent,BuildComponent]
})
export class AboutModule { }
