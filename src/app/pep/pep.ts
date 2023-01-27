export interface Pep {
  pepNumber: string,
  patientId: string,
  doctorId: string,
  status: string,
  prescription?: string,
  bloodType?: string,
  allergies?: string,
  createdAt?: any,
  updateAt?: any,
}