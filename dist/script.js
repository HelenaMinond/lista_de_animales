"use strict";

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Variables
var nombreDueno = document.querySelector("#nombreDueno");
var numeroTelefonico = document.querySelector("#numeroTelefonico");
var lugarResidencia = document.querySelector("#lugarResidencia");
var nombreMascota = document.querySelector("#nombreMascota");
var tipoMascota = document.querySelector("#tipoMascota");
var motivoConsulta = document.querySelector("#motivoConsulta");
var botonAgregar = document.querySelector("#botonAgregar");
var mensajeRespuesta = document.querySelector("#mensajeRespuesta"); //Clases

var Propietario = /*#__PURE__*/function () {
  function Propietario(nombrePropietario, direccion, telefono) {
    _classCallCheck(this, Propietario);

    this._nombrePropietario = nombrePropietario;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  _createClass(Propietario, [{
    key: "datosPropietario",
    value: function datosPropietario() {
      return "El nombre del due\xF1o es: ".concat(this._nombrePropietario, ". El domicilio es: ").concat(this._direccion, ", y el n\xFAmero telef\xF3nico de contacto: ").concat(this._telefono);
    }
  }]);

  return Propietario;
}();

var Animal = /*#__PURE__*/function (_Propietario) {
  _inherits(Animal, _Propietario);

  var _super = _createSuper(Animal);

  function Animal(nombrePropietario, direccion, telefono, tipo) {
    var _this;

    _classCallCheck(this, Animal);

    _this = _super.call(this, nombrePropietario, direccion, telefono);
    _this._tipo = tipo;
    return _this;
  }

  _createClass(Animal, [{
    key: "getTipo",
    get: function get() {
      return "El tipo de animal es un: ".concat(this._tipo);
    }
  }]);

  return Animal;
}(Propietario);

var Mascota = /*#__PURE__*/function (_Animal) {
  _inherits(Mascota, _Animal);

  var _super2 = _createSuper(Mascota);

  function Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermerdad) {
    var _this2;

    _classCallCheck(this, Mascota);

    _this2 = _super2.call(this, nombrePropietario, direccion, telefono, tipo);
    _this2._nombreMascota = nombreMascota;
    _this2._enfermedad = enfermerdad;
    return _this2;
  }

  _createClass(Mascota, [{
    key: "getNombreMascota",
    get: function get() {
      return this._nombreMascota;
    }
  }, {
    key: "setNombreMascota",
    set: function set(val) {
      this._nombreMascota = val;
    }
  }, {
    key: "getEnfermerdad",
    get: function get() {
      return this._enfermedad;
    }
  }, {
    key: "setEnfermerdad",
    set: function set(val) {
      this._enfermedad = val;
    }
  }]);

  return Mascota;
}(Animal); //Función botón


botonAgregar.addEventListener('click', function () {
  var dato = {
    nd: nombreDueno.value,
    nt: numeroTelefonico.value,
    lr: lugarResidencia.value,
    nm: nombreMascota.value,
    tm: tipoMascota.value,
    mc: motivoConsulta.value
  };

  switch (dato.tm) {
    case 'Perro':
      var perro = new Mascota(dato.nd, dato.lr, dato.nt, dato.nm, dato.tm, dato.mc);
      mensajeRespuesta.innerHTML = "\n      <p>Datos Agregados</p>\n      <p>".concat(perro.datosPropietario(), "</p>\n      <p>El tipo de animal es un: ").concat(dato.tm, ", mientras que el nombre de la mascota es: ").concat(dato.nm, " y la enfermedad es: ").concat(dato.mc, "</p>\n      ");
      break;

    case 'Gato':
      var gato = new Mascota(dato.nd, dato.lr, dato.nt, dato.nm, dato.tm, dato.mc);
      mensajeRespuesta.innerHTML = "\n      <p>Datos Agregados</p>\n      <p>".concat(gato.datosPropietario(), "</p>\n      <p>El tipo de animal es un: ").concat(dato.tm, ", mientras que el nombre de la mascota es: ").concat(dato.nm, " y la enfermedad es: ").concat(dato.mc, "</p>\n      ");
      break;

    case 'Conejo':
      var conejo = new Mascota(dato.nd, dato.lr, dato.nt, dato.nm, dato.tm, dato.mc);
      mensajeRespuesta.innerHTML = "\n      <p>Datos Agregados</p>\n      <p>".concat(conejo.datosPropietario(), "</p>\n      <p>El tipo de animal es un: ").concat(dato.tm, ", mientras que el nombre de la mascota es: ").concat(dato.nm, " y la enfermedad es: ").concat(dato.mc, "</p>\n      ");
      break;
  }
});