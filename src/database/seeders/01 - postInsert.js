module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Post', [
      {
        title: 'Mundo de OZ',
        content: `Em sinopse, a história conta a aventura de Dorothy, 
          uma menina do Kansas que mora com os tios e seu cachorro Totó. 
          Um dia, um ciclone chega à moradia da família, levando a casa pelos ares`,
        userId: 1
      },
      {
        title: 'Maze runner',
        content: `Thomas acorda em um elevador sem nenhuma memória. 
          Quando as portas se abrem ele se vê rodeado por um monte de 
          garotos, que também não possuem lembranças do passado. 
          Eles estão presos nesse lugar chamado Clareira`,
        userId: 2
      },
      {
        title: 'Harry Potter',
        content: `Harry Potter vive com os tios Dursley, onde é mal 
          tratado até completar seus 11 anos. É com essa idade que o 
          jovem bruxo começa a receber cartas da escola de Hogwarts... 
          Porém Voldemort falha em sua missão e foge de Harry que passa 
          a pedra filosofal para o diretor da escola destruir-la`,
        userId: 2
      },
      {
        title: '20000 léguas submarinas',
        content: `Em 1866, o Professor Pierre M. Aronnax e seu assistente 
          Conseil, que estão em São Francisco para pesquisar relatos de 
          um monstro marinho gigante atacando navios no Oceano Pacífico, 
          são convidados a participar de uma expedição para procurar a 
          criatura. Durante a busca, eles e o arpoador Ned Land são 
          lançados ao mar durante um ataque, acabando por descobrir que 
          o monstro é na verdade um submarino pilotado pelo brilhante, 
          mas assombrado, Capitão Nemo`,
        userId: 3
      },
      {
        title: 'Viagem ao centro da terra',
        content: `Em 1863, pleno século XIX, o renomado cientista e professor 
          de geologia e mineralogia alemão, Otto Lidenbrock, após ter encontrado 
          um manuscrito escrito em código único pelo antigo alquimista islandês 
          do século XVI, Arne Saknussemm, e de o ter decifrado, ele descobre 
          que, segundo o alquimista, quem desce a cratera do vulcão Sneffels, 
          situado na Islândia, antes do início de julho, se chega ao centro da 
          Terra; sendo que Saknussemm teria feito esse percurso`,
        userId: 4
      }
    ]),
  down: (queryInterface) => queryInterface.bulkDelete('Post', null, {})
}
