import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { SettingsContainerComponent } from "./features/settings/settings/settings-container.component";

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    AgGridModule.withComponents([]),

    // app
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SettingsContainerComponent
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    SettingsContainerComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})

export class AppModule {
}
