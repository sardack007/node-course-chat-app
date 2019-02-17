var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var text = 'hola';
    var from = 'Jim';

    var result = generateMessage(from, text);

    expect(result.from).toBe(from);
    expect(result.text).toBe(text);
    expect(result.createAt).toBeA('number');
  });
});
