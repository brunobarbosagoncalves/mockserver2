export default {
  // adicionar os atributos (updatedAt, createdAt)
  timestamps: true,

  // não permite deletar do banco, mas inseri na coluna deletedAt a data da exclusão
  // se o timestamps estiver ativado
  paranoid: true,

  // para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente
  // como permanencia para permanencium ative a opção como true
  freezeTableName: true
}
