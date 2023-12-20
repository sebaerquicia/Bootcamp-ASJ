export interface Usuario {
  name: string;
  job: string;
  id?: number;
}

//el signo ? significa que el id es opcional
// esto devuelve una estructura de datos para utilizar en el servicio
//todavia no esta importado