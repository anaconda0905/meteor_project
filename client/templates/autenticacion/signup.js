Template.signup.events({
  'click .ingresar': function (event, template) {
      event.preventDefault();

      let datos = {
        //username: template.find("[name='username']").value,
        email: template.find("[name='email']").value,
        password: template.find("[name='password']").value,
        profile: {
          nombre: template.find("[name='nombre']").value,
          edad: template.find("[name='edad']").value
        }
      }

      if (datos.email !== "" && datos.password !== "" && datos.profile.telefono !== "" && datos.profile.edad >= 18 && datos.profile.edad <= 70) {
        Meteor.call('crearUsuario', datos, function (error) {
            if (error) {
              alert(error);
            } else {
              Meteor.loginWithPassword(datos.email, datos.password, function (error) {
                if (error) {
                  alert(error);
                } else {
                  console.log("signup - verficar");
                  FlowRouter.go('/verificar');
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
  }
});
