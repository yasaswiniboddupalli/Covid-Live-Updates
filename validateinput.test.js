const validateInput = require('./validateinput');

test("return given an empty input",()=>{
    expect(validateInput("")).toBe(false);
});