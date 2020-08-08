//config reset password
if (Accounts._resetPasswordToken) {
    console.log(Accounts._resetPasswordToken);
    Session.set('resetPasswordToken', Accounts._resetPasswordToken);
}
//Router reset password

FlowRouter.route('/reset-password/:token', {
    //this.layout('ResetLayout');

    //Accounts._resetPasswordToken = this.params.token;
    //Session.set('resetPasswordToken', Accounts._resetPasswordToken);
    action: function (params) {
        BlazeLayout.render('ResetPassword');
    }

});

Template.ResetPassword.helpers({
 resetPassword: function(){
    console.log('resetPasswordToken');
    return Session.get('resetPasswordToken');

  }
});

Template.ResetPassword.events({
    'click .reset': function (e, t) {
        e.preventDefault();
        let newPassword = t.find("[name='password']").value;

        if (newPassword === t.find("[name='password-confirm']").value) {
            let token = FlowRouter.getParam('token');
            Accounts.resetPassword(token, newPassword, function (err) {
                if (err) {
                    Bert.alert(err, 'danger', 'growl-top-right');
                } else {
                    Bert.alert('Contraseña cambiada', 'success', 'growl-top-right');
                    FlowRouter.go("/");
                }
            })
        } else {
            alert('Ingrese La contraseña correcta');
        }

    }
});
