FlowRouter.route('/', {
  name: 'home',
  action() {
      //BlazeLayout.render('login');
      BlazeLayout.render('layout', { contenido: 'todos'});
    
  }
});

FlowRouter.route('/login2', {
  name: 'home',
  action() {
      BlazeLayout.render('login');
  }
});

FlowRouter.route('/forgotpassword', {
  name: 'forgotpassword',
  action() {
      BlazeLayout.render('forgotpassword');
  }
});

FlowRouter.route('/paquetes', {
  name: 'paquetes',
  action() {
      BlazeLayout.render('paquetes');
  }
});


FlowRouter.route('/login', {
  name: 'login',
  action() {

      BlazeLayout.render('loginAnunciante');

  }
});

FlowRouter.route('/signup', {
  name: 'Signup',
  action() {
    BlazeLayout.render('signup');
  }
});

FlowRouter.route('/verificar', {
  name: 'Verificar',
  action() {
    BlazeLayout.render('Verificar');
  }
});

FlowRouter.route('/codigo', {
  name: 'Codigo',
  action() {
    BlazeLayout.render('codigo');
  }
});

FlowRouter.route('/cuenta', {
  name: 'Cuenta',
  action() {
    BlazeLayout.render('cuenta');
  }
});

FlowRouter.route('/anuncios', {
  name: 'Anuncios',
  action() {
    BlazeLayout.render('layout', { contenido: 'todos'});
  }
});

FlowRouter.route('/ofertas', {
  name: 'Ofertas',
  action() {
    BlazeLayout.render('Negociaciones');
  }
});

FlowRouter.route('/ofertas2', {
  name: 'Ofertas2',
  action() {
    BlazeLayout.render('Negociaciones2');
  }
});

FlowRouter.route('/productos', {
  name: 'Tiendas',
  action() {
    BlazeLayout.render('layoutTiendas', { contenido: 'productos'});
  }
});

FlowRouter.route('/productos/:productoId', {
  name: 'Tiendas',
  action() {
    console.log('gola');
    BlazeLayout.render('layoutTiendas', { contenido: 'producto'});
  }
});

FlowRouter.route('/compras', {
  name: 'Tiendas',
  action() {
    BlazeLayout.render('layoutTiendas', { contenido: 'compras'});
  }
});

FlowRouter.route('/tiendas', {
  name: 'Tiendas',
  action() {
    BlazeLayout.render('layoutTiendas', { contenido: 'tiendas'});
  }
});

FlowRouter.route('/tiendas/:tiendaId', {
  name: 'Tienda',
  action() {
    BlazeLayout.render('tienda');
  }
});

FlowRouter.route('/anunciante/:anuncianteId', {
  name: 'Perfil.Anunciante',
  action() {
    BlazeLayout.render('layout', { contenido: 'PerfilAnunciante'});
  }
});

FlowRouter.route('/contactos', {
  name: 'Contactos',
  action() {
    BlazeLayout.render('layout', { contenido: 'Contactos'});
  }
});

FlowRouter.route('/favoritos', {
  name: 'Favoritos',
  action() {
    BlazeLayout.render('layout', { contenido: 'Favoritos'});
  }
});

FlowRouter.route('/anunciar', {
  name: 'Anunciar',
  action() {
    BlazeLayout.render('Anunciar');
  }
});

FlowRouter.route('/comentar', {
  name: 'Comentar',
  action() {
    BlazeLayout.render('Comentar');
  }
});


FlowRouter.route('/admin', {
  name: 'Administrador',
  action() {
    BlazeLayout.render('Admin', { administrador: 'Administrador'});
  }
});

FlowRouter.route('/admin/comentarios', {
  name: 'Administrador.Comentarios',
  action() {
    BlazeLayout.render('Admin', { administrador: 'AdministradorComentarios'});
  }
});

FlowRouter.route('/vendedores', {
  name: 'Vendedores',
  action() {
    BlazeLayout.render('AdminVentas', { ventas: 'AdminProductos'});
  }
});

FlowRouter.route('/vendedores/ventas', {
  name: 'Vendedores.ventas',
  action() {
    BlazeLayout.render('AdminVentas', { ventas: 'ventasAdmin'});
  }
});

FlowRouter.route('/admin/anuncios', {
  name: 'Administrador.anuncios',
  action() {
    BlazeLayout.render('Admin', { administrador: 'AdministradorAnuncios'});
  }
});

FlowRouter.route('/admin/publicidad', {
  name: 'Administrador.publicidad',
  action() {
    BlazeLayout.render('Admin', { administrador: 'AdministradorPublicidad'});
  }
});

FlowRouter.route('/admin/contratos', {
  name: 'Administrador.contratos',
  action() {
    BlazeLayout.render('Admin', { administrador: 'AdministradorContratos'});
  }
});


FlowRouter.route('/admin/usuarios', {
  name: 'Administrador.anuncios',
  action() {
    BlazeLayout.render('Admin', { administrador: 'Usuarios'});
  }
});

FlowRouter.route('/admin/reportes', {
  name: 'Administrador.reportes',
  action() {
    BlazeLayout.render('Admin', { administrador: 'AdministradorReportes'});
  }
});

FlowRouter.route('/t', {
  name: 'Terminos',
  action() {
    BlazeLayout.render('t');
  }
});

FlowRouter.route('/p', {
  name: 'Politicas',
  action() {
    BlazeLayout.render('p');
  }
});

// Vendedores
FlowRouter.route('/ventas', {
  name: 'Ventas.login',
  action() {
    BlazeLayout.render('Ventas', { ventas: 'adminVentas'});
  }
});
