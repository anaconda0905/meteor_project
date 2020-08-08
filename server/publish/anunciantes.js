Meteor.publish('anunciantes', function () {
  if (this.userId) {
    return Anunciantes.find({anuncia: true});
  } else {
    this.stop();
    return;
  }
});



Meteor.publish('anunciantes2', function (search) {
  let query      = {},
      projection = { limit: 10, sort: { nombre: 1 } };

      console.log(search);

  if ( search ) {
    console.log(search);
    let regex = new RegExp( search, 'i' );

    
      query = {
      $or: [
        { nombre: regex },
        //{ telefono: regex },
        { piel: regex},
        //{ intereses: regex},
        { genero: regex},
        { edad: regex},
        { cabello: regex},
        { contextura: regex},
        { ubicacion: regex},
        //{ precio: regex},
        //{ calificacion: regex}
      ]};
    
    projection.limit = 100;
  }

  console.log(Anunciantes.find( {anuncia: true}, query, projection ).fetch());

  return Anunciantes.find( {anuncia: true}, query, projection );
});


Meteor.publish('postulantes', function () {
  if (this.userId) {
    return Anunciantes.find({anuncia: false});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('users', function () {
  if (this.userId) {
    return Meteor.users.find();
  } else {
    this.stop();
    return;
  }
});


Meteor.publish('comentarios', function (anuncianteId) {
  if (this.userId) {
    return Comentarios.find({anuncianteId: anuncianteId});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('todosComentarios', function () {
  if (this.userId) {
    return Comentarios.find({});
  } else {
    this.stop();
    return;

  }
});


Meteor.publish('contactos', function () {
  if (this.userId) {
    return Contactos.find({});
  } else {
    this.stop();
    return;

  }
});

Meteor.publish('ofertas', function () {
  if (this.userId) {
    return Ofertas.find({});
  } else {
    this.stop();
    return;

  }
});

Meteor.publish('productos2', function (search) {
  let query      = {},
      projection = { limit: 10, sort: { nombre: 1 } };

      console.log(search);

  if ( search ) {
    console.log(search);
    let regex = new RegExp( search, 'i' );

    
      query = {
      $or: [
        { nombre: regex },
        { descripcion: regex },
        { precio: regex},
      ]};
    
    projection.limit = 100;
  }

  //console.log(Anunciantes.find( {anuncia: true}, query, projection ).fetch());

  return Productos.find( query, projection );
});

Meteor.publish('tiendas2', function (search) {
  let query      = {},
      projection = { limit: 10, sort: { nombre: 1 } };

      console.log(search);

  if ( search ) {
    console.log(search);
    let regex = new RegExp( search, 'i' );

    
      query = {
      $or: [
        { nombre: regex },
        { rubro: regex },
        { telefono: regex},
      ]};
    
    projection.limit = 100;
  }

  //console.log(Anunciantes.find( {anuncia: true}, query, projection ).fetch());

  return Tiendas.find( query, projection );
});

Meteor.publish('interesados', function () {
  return Postulantes.find();
});

Meteor.publish('panico', function () {
  return Panico.find();
});