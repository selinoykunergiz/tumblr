import { NgModule } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { CommonRoutingModule } from '../common/common-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { WavesModule ,ButtonsModule, CollapseModule,ModalModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    CommonComponent
  ],
  imports: [
    CommonRoutingModule,
    BrowserModule,
    WavesModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class CommonModule { }
