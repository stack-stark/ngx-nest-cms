import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { IconsProviderModule } from '../../icons-provider.module';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
