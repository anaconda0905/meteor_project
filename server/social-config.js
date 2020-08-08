import { Meteor } from 'meteor/meteor';


ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1393336904038440',
    secret: '03b477a715d37de1c07aee7b1c96993d'
});


Accounts.onCreateUser(function (options, user) {


    console.log('THIS');
    console.log(user);
    if (!user.services.facebook) {
        return user;
    }

    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});

console.log('TEST');
