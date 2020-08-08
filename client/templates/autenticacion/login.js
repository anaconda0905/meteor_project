document.addEventListener("backbutton", onBackButtonDown, false);

function onBackButtonDown(event) {
    event.preventDefault();
    event.stopPropagation()
}

Template.login.onCreated(()=> {
  let self = Template.instance();
  let user;
  self.autorun( () => {
      user = Meteor.user();

      //usuario logueado
      if ( user && typeof user._id !== 'undefined' ){
            // si el usuario es admin, no necesita verficar
            if ( Roles.userIsInRole( user._id, 'admin', 'default-group' ) ) {
              FlowRouter.go('/anuncios');
              return true;
            } else {
              FlowRouter.go('/anuncios');
            }

            // usuario con numero de telefono verficado
           //else if ( typeof user.profile.verificado !== 'undefined' && user.profile.verificado ){
           //  FlowRouter.go('/anuncios');
           //  return true;
           //}

           //usario sin verificacion de telefono
          //else if ( typeof user.profile.verificado === 'undefined' || !user.profile.verificado ){
          //   FlowRouter.go('/verificar');
          //   return true;
          // }

      }

  });
});

Template.login.events({
    'click .ingresar'(event, template) {
        event.preventDefault();

        let datos = {
          email: template.find("[name='email']").value,
          password: template.find("[name='password']").value,
          profile: {
            edad: template.find("[name='edad']").value
          }
        }

        if (datos.email !== "" && datos.password !== "" && datos.profile.edad >= 18 && datos.profile.edad <= 70) {
          Meteor.call('crearUsuario', datos, function (error) {
              if (error) {
                alert(error);
              } else {
                Meteor.loginWithPassword(datos.email, datos.password, function (error) {
                  if (error) {
                    alert(error);
                  } else {
                    //alert('verifica');
                    FlowRouter.go('/anuncios');
                  }
                });
              }
          });
        } else {
          if (datos.profile.edad < 18) {
            alert('No puedes registrarter, eres menor de 18 años');
          } else {
            alert('completa los datos');
          }
        }

    },
    'click #logout'(){
      facebookConnectPlugin.logout();
      Meteor.logout();
    }
});


Template.loginAnunciante.events({
    'click .ingresar'(event, template) {
        event.preventDefault();

        let datos = {
            email: template.find("[name='usuario']").value,
            password: template.find("[name='password']").value
        }

        if (datos.email !== "" && datos.password !== "") {
            Meteor.loginWithPassword(datos.email, datos.password, function (error) {
                if (error) {
                    alert(error);
                } else {
                    FlowRouter.go('/');
                }
            });
        } else {

            alert('Completa los datos');

        }
    }
});

Template.tiendas.onCreated((options, user) => {
    // console.log(options);
    // console.log(user);
});


Template.Verificar.onCreated(()=> {
    let self = Template.instance();
    self.autorun( () => {
       if ( Meteor.userId() ){
         FlowRouter.go('/anuncios');
       }
    });
});

Template.Verificar.events({
    'click .sms': function (e, t) {
        e.preventDefault();

        let datos = {
            user: t.find("[name='user']").value,
            celular: t.find("[name='celular']").value,
        }

        Session.set('telefono', datos.celular)

        if (datos.user !== "" && datos.celular !== "") {
            Meteor.call('crearToken', datos.celular, function (err) {
                if (err) {
                    alert(err);
                } else {
                    FlowRouter.go('/codigo');
                    alert('Te hemos enviado un sms con el código de verificación');
                }
            });
        } else {
            alert('Complete los datos');
        }
    }
});

Template.forgotpassword.events({
  'click .ingresar'(e,t) {

    let email = t.find("[name='email']").value;

    Accounts.forgotPassword({email: email}, function (e, r) {
        if (e) {
            Bert.alert(e.reason, 'warning', 'growl-top-right');
        } else {
            Bert.alert('Hemos enviado un correo, para reiniciar su cuenta', 'success', 'growl-top-right');
        }
    });
  }
});

Template.codigo.events({
    'click .v': function (e, t) {
        let codigo = t.find("[name='codigo']").value;

        let telefono = Session.get('telefono')
        if (codigo !== "") {
            Meteor.call('verificarToken', codigo, telefono, function (err) {
                if (err) {
                    alert(err);
                } else {
                    FlowRouter.go('/anuncios');
                }
            });
        } else {
            alert('Ingrese el código de verificación');
        }
    }
});
