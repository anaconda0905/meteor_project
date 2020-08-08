import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
//  process.env.MAIL_URL = "smtp://postmaster@grupoddv.com:faf68e2df2f77397baf3a38e8cd9f209@smtp.mailgun.org:587";

  process.env.MAIL_URL = "smtp://postmaster@morangesoft.com:faf68e2df2f77397baf3a38e8cd9f209@smtp.mailgun.org:587";
  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset-password/' + token);
  };
});
/*
 var users = [{nombre:"Admin User",email:"mq@morangesoft.com",roles:['admin']}];

_.each(users, function (user) {
  var id;

   id = Accounts.createUser({
     email: user.email,
     password: "miguel24",
     profile: { name: user.name }
   });

   if (user.roles.length > 0) {

     Roles.addUsersToRoles(id, user.roles, 'default-group');
   }

 }); */
/*
 user = Accounts.createUser({
    email: 'morangesoftceo@gmail.com',
    password: "gogostar99"
  });

  Meteor.users.update({_id: user}, {
    $set: {
      'profile.nombre': 'Mijail Quesada',
      'profile.verificado': false
    }
  })
  Roles.addUsersToRoles(user, 'usuario', 'app');
});
*/