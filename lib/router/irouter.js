(function() {
  var Defer, IRouter,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Defer = require('../defer');

  IRouter = (function(_super) {
    __extends(IRouter, _super);

    function IRouter() {
      this.maxLength = 350;
    }

    IRouter.prototype.output = function(message, to) {};

    IRouter.prototype.input = function(message, from, to, channal) {};

    IRouter.prototype.inputMe = function(message, from, to, channal) {};

    IRouter.prototype.whois = function(user, callback) {};

    IRouter.prototype.names = function(channal, callback) {};

    IRouter.prototype.notice = function(nick, message) {};

    IRouter.prototype.raw = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    };

    IRouter.prototype.rplRaw = function(reply) {};

    IRouter.prototype.rplJoin = function(channel, nick) {};

    IRouter.prototype.setSelfName = function(name) {};

    IRouter.prototype.getSelfName = function(name) {};

    IRouter.prototype.setChannels = function(channels) {};

    IRouter.prototype.getChannels = function(channels) {};

    return IRouter;

  })(Defer);

  module.exports = IRouter;

}).call(this);