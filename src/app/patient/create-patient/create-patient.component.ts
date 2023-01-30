import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gender, CivilState, User, Novo, Patient } from '../patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit{
  formCadastro!: FormGroup;

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    gender: ['',[Validators.required]],
    maritalStatus: ['', [Validators.required]],
    insuranceCompany: ['', [Validators.required]],
    healthInsurenceCard: ['', [Validators.required]],
    observation: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    street: ['', [Validators.required]],
    number: ['', [Validators.required]],
    district: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    complements: ['']
    });
  }

  patient: Patient = {
    name: '',
    cpf: "",
    dateOfBirth: '',
    phone: '',
    email: '',
    gender: '',
    maritalStatus: '',
    insuranceCompany: '',
    healthInsurenceCard: '',
    observation: '',
    address: {
      zipCode: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
      complements: ''
    },
  }

  userPatient: User = {
    username: '',
    password: '',
    role: ['ROLE_PATIENT']
  }

  novo: Novo = {
    nome: "angelo",
    idade: "22"    
  }

  constructor(private patientService: PatientService,
    private router: Router, private formBuilder: FormBuilder) {}

    createPatient(): void {
    this.patientService.createNewPatient(this.patient);
    this.patientService.createUserPatient(this.userPatient)
    this.patientService.showMessage("Cadastrado com sucesso!");
<<<<<<< HEAD
    console.log(this.patient, this.userPatient)
=======
    this.router.navigate(["/admin/lista-paciente"]);
>>>>>>> 2151bf63626feccbe59a131c288cdffbfadf9195
  }

  cancel(): void {
    this.router.navigate(['/login'])
  }

  generos: Gender[] = [
    {value: 'MALE', viewValue: 'Masculino'},
    {value: 'FEMALE', viewValue: 'Feminino'},
  ];

  estadoCivil: CivilState[] = [
    {value: 'SINGLE', viewValue: 'Solteiro(a)'},
    {value: 'MARRIED', viewValue: 'Casado(a)'},
    {value: 'DIVORCED', viewValue: 'Divorciado(a)'},
  ];

}
