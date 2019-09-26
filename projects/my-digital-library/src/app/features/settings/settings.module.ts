import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { SettingsRoutingModule } from "./settings-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, SettingsRoutingModule]
})
export class SettingsModule {}
