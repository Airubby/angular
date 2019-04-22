import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';

// import {DirectiveModule} from '../../directive/directive.module'

@NgModule({
  declarations: [UserComponent, ProfileComponent, AddressComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    // DirectiveModule
  ]
})
export class UserModule { }
