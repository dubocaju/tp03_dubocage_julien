import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { ClientService } from "./shared/services/client.service";
import { FormInputDirective } from './shared/directives/form-input.directive';
import { PasswordPipe } from './shared/pipes/password.pipe';
import { PhonePipe } from './shared/pipes/phone.pipe';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    HeaderComponent,
    FooterComponent,
    ResultFormComponent,
    FormInputDirective,
    PasswordPipe,
    PhonePipe,
    CatalogueComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
