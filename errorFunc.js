'use strict';
function InputError(message){
  this.message = message;
  this.stack = (new Error()).stack;
}

InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = 'InputError';

module.exports = {InputError};