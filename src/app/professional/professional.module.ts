import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDoctorComponent } from './professional-create/create-doctor.component';
import { PatientRoutingModule } from '../patient/patient-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import {MatIconModule} from '@angular/material/icon';
import { UpdateProfessionalComponent } from './update-professional/update-professional.component';




@NgModule({
  declarations: [CreateDoctorComponent, UpdateProfessionalComponent, ProfessionalListComponent] ,
  imports: [
    CommonModule, 
    PatientRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ]
})
export class ProfessionalModule { }
