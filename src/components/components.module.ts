import { NgModule } from '@angular/core';
import { IonFlipCardComponent } from './ion-flip-card/ion-flip-card';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
@NgModule({
	declarations: [IonFlipCardComponent,
    ExpandableHeaderComponent],
	imports: [],
	exports: [IonFlipCardComponent,
    ExpandableHeaderComponent]
})
export class ComponentsModule {}
