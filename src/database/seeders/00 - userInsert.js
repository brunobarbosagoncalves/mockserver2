module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('User', [
      {
        name: 'Bruno Barbosa',
        password: 'bruno123',
        email: 'bruno@gmail.com'
      },
      {
        name: 'Lucas Barbosa',
        password: 'lucas123',
        email: 'lucas@gmail.com'
      },
      {
        name: 'Edna Barbosa',
        password: 'edna123',
        email: 'edna@gmail.com'
      },
      {
        name: 'Agnaldo Barbosa',
        password: 'agnaldo123',
        email: 'agnaldo@gmail.com'
      }
    ]),
  down: (queryInterface) => queryInterface.bulkDelete('User', null, {})
}
