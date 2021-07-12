const argv = require('yargs').argv
const contacts = require('./contacts')

// eslint-disable-next-line space-before-function-paren
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contacts.listContacts()
      break

    case 'get':
      contacts.getContactById(id)
      break

    case 'add':
      contacts.addContact(name, email, phone)
      break

    case 'remove':
      contacts.removeContact(id)
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)
