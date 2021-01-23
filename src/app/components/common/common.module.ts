import { NgModule } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { CommonRoutingModule } from '../common/common-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { WavesModule, TableModule ,ButtonsModule, CollapseModule,InputsModule,ModalModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    CommonComponent
  ],
  imports: [
    CommonRoutingModule,
    BrowserModule,
    WavesModule.forRoot(),
    TableModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    IconsModule
  ]
})
export class CommonModule { }
