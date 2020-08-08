Meteor.publish('productos', function () {
  if (this.userId) {
    return Productos.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('tiendas', function () {
  if (this.userId) {
    return Tiendas.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('tiendaProductos', function (tiendaId) {
  if (this.userId) {
    return Productos.find({tiendaId: tiendaId});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('todosproductos', function () {
  if (this.userId) {
    return Productos.find({});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('productosxtienda', function () {
  let tiendaId = Meteor.users.findOne({_id: this.userId}).profile.tiendaId
  if (this.userId) {
    return Productos.find({tiendaId: tiendaId});
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('fotosp', function () {
  if (this.userId) {
    return FotosProductos.find();
  } else {
    this.stop();
    return;
  }
});

Meteor.publish('todosComentariosProductos', function () {
  if (this.userId) {
    return ComentariosProductos.find();
  } else {
    this.stop();
    return;
  }
});


Meteor.publish('ComentariosProductos', function (productoId) {
  if (this.userId) {
    return ComentariosProductos.find({productoId: productoId});
  } else {
    this.stop();
    return;
  }
});
