import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FontAwsOmeComponent } from './lib/font-aws-ome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    FontAwsOmeComponent
  ],
  exports: [
    FontAwsOmeComponent
  ]
})
export class FontAwsOmeModule { }

export * from './lib/font-aws-ome.component';
