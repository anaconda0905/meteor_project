import { Meteor } from "meteor/meteor"
import loginWithNativeFacebook from "./loginWithNativeFacebook"

Meteor.loginWithNativeFacebook = loginWithNativeFacebook;

export {facebookConnectPlugin};