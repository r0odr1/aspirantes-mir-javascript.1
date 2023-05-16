let persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Bogota",
    profesion: "Desarrollador",
  };
  
  function object2() {
    console.log(persona);
    function presentacion(objeto) {
      return objeto.nombre+ ", " + objeto.edad+ ", " + objeto.ciudad;
    }
    let mensaje = presentacion(persona);
    console.log(mensaje);
    persona.hobbies = ["bailar", "futbol", "series"];
    console.log(persona.hobbies);
  
    for (let i = 0; i < persona.hobbies.length; i++) {
      const hobbies = persona.hobbies[i];
      console.log(hobbies);
    }
  }
  object2();