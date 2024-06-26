

export interface User {
  _id: string;
  name: string;
  lastName: string;
  mail: string;
  accesses: Access[];
}
export interface Pacientes {
  id?: string;
  nombre: string;
  apellido: string;
  email: string;
  genero: string;
  fechaNacimiento: string;
}
export interface Turnos {
  id?: string;
  nombre: string;
  apellido: string;
  email: string;
  horaTurno: string;
  celular: string;
  tipoTurno: string;
}
export interface HistoriaClinica {
  id?: string;
  texto: string;
  fechaCreacion: string;
}

export interface Access {
  role: string;
  app: string;
}


export interface UserData {
  name: string;
  lastName?: string;
  image?: string;
}

export interface FiltrosHistoriaClinica {
  tipoHistoria: string;
  rangoFechas?: any;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface PaginationProps {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export interface handleFormPaciente {
  onSubmit: (paciente: Pacientes) => void;
  pacienteData?: Pacientes
}

export interface handleFormTurno {
  onSubmit: (paciente: Pacientes) => void;
}

export interface TunosProfecional {
  fechaDesde: string;
  fechaHasta: string;
  duracion: number;
}
