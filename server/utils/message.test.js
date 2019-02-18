var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Jim';
    var latitude = 15;
    var longitude = 19;
    var url = `https://www.google.com/maps/?q=15,19`;
    var message= generateLocationMessage(from, latitude, longitude);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, url});

  });
});
