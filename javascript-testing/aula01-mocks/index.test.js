const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

  ;

(async () => {
  {
    const filePath = './mocks/emptyFiles-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/fourItems-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/invalid-header.csv'
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
      {
        "name": "Felipe Pavan",
        "id": 123,
        "profession": "Software Engineer",
        "birthDay": 1992
      },
      {
        "name": "Gabriela Tomazeli",
        "id": 321,
        "profession": "Architect",
        "birthDay": 1991
      },
      {
        "name": "Joãozinho",
        "id": 231,
        "profession": "Java Developer",
        "birthDay": 1997
      }
    ]
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()