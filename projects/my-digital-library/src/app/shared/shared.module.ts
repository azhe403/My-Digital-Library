import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatGridListModule, MatNativeDateModule } from '@angular/material';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AgGridModule } from 'ag-grid-angular';
import { environment } from '../../environments/environment';
import { BigInputActionComponent } from './big-input/big-input-action/big-input-action.component';
import { BigInputComponent } from './big-input/big-input/big-input.component';
import { RtlSupportDirective } from './rtl-support/rtl-support.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

// library.add(
//   faBars,
//   faUserCircle,
//   faPowerOff,
//   faCog,
//   faRocket,
//   faPlayCircle,
//   faGithub,
//   faMediumM,
//   faTwitter,
//   faInstagram,
//   faYoutube,
//   faPlus,
//   faEdit,
//   faTrash,
//   faTimes,
//   faCaretUp,
//   faCaretDown,
//   faExclamationTriangle,
//   faFilter,
//   faTasks,
//   faCheck,
//   faSquare,
//   faLanguage,
//   faPaintBrush,
//   faLightbulb,
//   faWindowMaximize,
//   faStream,
//   faBook
// );

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TranslateModule,

    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatGridListModule,

    FontAwesomeModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    AgGridModule.withComponents([]),
    FlexLayoutModule,

    SweetAlert2Module.forRoot()
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatGridListModule,

    FontAwesomeModule,

    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective,
    AgGridModule,
    FlexLayoutModule,
    SweetAlert2Module
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr'
    }

    // useValue {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE]
    // }, {
    //   provide: MAT_DATE_FORMATS,
    //   useValue: MY_FORMATS
    // }
  ]
})
export class SharedModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas);
    iconLibrary.addIconPacks(fab);
  }
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY'
  }
};
