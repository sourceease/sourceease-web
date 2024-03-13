import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeHomeComponent } from './pages/se-home/se-home.component';
import { SeAbouteUsComponent } from './pages/se-aboute-us/se-aboute-us.component';
import { SeContactUsComponent } from './pages/se-contact-us/se-contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeHeaderComponent } from './pages/se-header/se-header.component';
import { SeFooterComponent } from './pages/se-footer/se-footer.component';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SeHomeComponent,
    SeAbouteUsComponent,
    SeContactUsComponent,
    SeHeaderComponent,
    SeFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
     MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
