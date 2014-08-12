// Generated by CoffeeScript 1.7.1
(function() {
  var CommandSay, Icommand, colors,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __modulo = function(a, b) { return (a % b + +b) % b; };

  Icommand = require('./icommand.js');

  colors = ["\u000304", "\u000307", "\u000308", "\u000309", "\u000312", "\u000302", "\u000306"];

  CommandSay = (function(_super) {
    __extends(CommandSay, _super);

    function CommandSay() {}

    CommandSay.prototype.handle = function(sender, text, args, storage, textRouter, commandManager) {
      var i, message, success, temp;
      message = args.slice(1).join(" ");
      message = message.replace(/\\n/g, "\n");
      temp = message.split("");
      i = temp.length - 1;
      while (i >= 0) {
        if (!temp[i].match(/\s/)) {
          temp.splice(i, 0, colors[__modulo(i, colors.length)]);
        }
        i--;
      }
      message = temp.join("");
      textRouter.output(message, sender.channel);
      success = true;
      return success;
    };

    CommandSay.prototype.help = function(commandPrefix) {
      return ["make this bot to say some message, Usage", "" + commandPrefix + " messages.."];
    };

    CommandSay.prototype.hasPermission = function(sender, text, args, storage, textRouter, commandManager) {
      return true;
    };

    return CommandSay;

  })(Icommand);

  module.exports = CommandSay;

}).call(this);