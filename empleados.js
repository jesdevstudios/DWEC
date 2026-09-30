const empleados = [
  { id: 1, nombre: "Ana Gómez", departamento: "Sistemas", salario: 3500 },
  { id: 2, nombre: "Carlos Ruiz", departamento: "Marketing", salario: 2800 },
  { id: 3, nombre: "Elena Pérez", departamento: "Sistemas", salario: 4200 },
  { id: 4, nombre: "Luis Martínez", departamento: "Ventas", salario: 2500 }
];

export function agregarEmpleado(empleado) {
  empleados.push(empleado);
}

export function eliminarEmpleado(id) {
  const indice = empleados.findIndex(emp => emp.id === id);
  if (indice !== -1) {
    empleados.splice(indice, 1);
  }
}

export function buscarPorDepartamento(departamento) {
  return empleados.filter(emp => emp.departamento === departamento);
}

export function calcularSalarioPromedio() {
  if (empleados.length === 0) return 0;
  const total = empleados.reduce((suma, emp) => suma + emp.salario, 0);
  return total / empleados.length;
}

export function obtenerEmpleadosOrdenadosPorSalario() {
  return [...empleados].sort((a, b) => b.salario - a.salario);
}

export function obtenerEmpleados() {
  return empleados;
}