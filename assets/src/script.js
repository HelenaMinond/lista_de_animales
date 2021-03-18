//Variables
const nombreDueno = document.querySelector("#nombreDueno");
const numeroTelefonico = document.querySelector("#numeroTelefonico");
const lugarResidencia = document.querySelector("#lugarResidencia");
const nombreMascota = document.querySelector("#nombreMascota");
const tipoMascota = document.querySelector("#tipoMascota");
const motivoConsulta = document.querySelector("#motivoConsulta");
const botonAgregar = document.querySelector("#botonAgregar");
const mensajeRespuesta = document.querySelector("#mensajeRespuesta");

//Clases
class Propietario {
  constructor(nombrePropietario, direccion, telefono) {
    this._nombrePropietario = nombrePropietario;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es: ${this._nombrePropietario}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombrePropietario, direccion, telefono, tipo) {
    super(nombrePropietario, direccion, telefono);
    this._tipo = tipo;
  }
  get getTipo() {
    return `El tipo de animal es un: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermerdad) {
    super(nombrePropietario, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermerdad;
  }
  get getNombreMascota() {
    return this._nombreMascota;
  }
  set setNombreMascota(val) {
    this._nombreMascota = val
  }
  get getEnfermerdad() {
    return this._enfermedad;
  }
  set setEnfermerdad(val) {
    this._enfermedad = val
  }
}

//Función botón
botonAgregar.addEventListener('click', () => {

  const dato = {
    nd: nombreDueno.value,
    nt: numeroTelefonico.value,
    lr: lugarResidencia.value,
    nm: nombreMascota.value,
    tm: tipoMascota.value,
    mc: motivoConsulta.value
  };

  switch (dato.tm) {
    case 'Perro':
      const perro = new Mascota(dato.nd, dato.lr, dato.nt, dato.nm, dato.tm, dato.mc);
      mensajeRespuesta.innerHTML = `
      <p>Datos Agregados</p>
      <p>${perro.datosPropietario()}</p>
      <p>El tipo de animal es un: ${dato.tm}, mientras que el nombre de la mascota es: ${dato.nm} y la enfermedad es: ${dato.mc}</p>
      `;
      break;

    case 'Gato':
      const gato = new Mascota(dato.nd, dato.lr, dato.nt, dato.nm, dato.tm, dato.mc);
      mensajeRespuesta.innerHTML = `
      <p>Datos Agregados</p>
      <p>${gato.datosPropietario()}</p>
      <p>El tipo de animal es un: ${dato.tm}, mientras que el nombre de la mascota es: ${dato.nm} y la enfermedad es: ${dato.mc}</p>
      `;
      break;

    case 'Conejo':
      const conejo = new Mascota(dato.nd, dato.lr, dato.nt, dato.nm, dato.tm, dato.mc);
      mensajeRespuesta.innerHTML = `
      <p>Datos Agregados</p>
      <p>${conejo.datosPropietario()}</p>
      <p>El tipo de animal es un: ${dato.tm}, mientras que el nombre de la mascota es: ${dato.nm} y la enfermedad es: ${dato.mc}</p>
      `;
      break;
    }
})
