import {
  agregarEmpleado,
  eliminarEmpleado,
  buscarPorDepartamento,
  calcularSalarioPromedio,
  obtenerEmpleadosOrdenadosPorSalario,
  obtenerEmpleados
} from './empleados.js';

agregarEmpleado({ id: 5, nombre: "Sofía Castro", departamento: "Marketing", salario: 3100 });
agregarEmpleado({ id: 6, nombre: "Pedro López", departamento: "Ventas", salario: 2900 });

console.log(buscarPorDepartamento("Sistemas"));

console.log(calcularSalarioPromedio());

console.log(obtenerEmpleadosOrdenadosPorSalario());

eliminarEmpleado(4);
console.log(obtenerEmpleados());