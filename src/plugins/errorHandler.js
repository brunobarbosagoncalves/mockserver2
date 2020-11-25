export default (error) => {
  try {
    if (error.name.test(new RegExp('/^.*sequelize.*error$/gmi'))) {
      console.log('IIFFFFF--------')
      return {
        name: error.name,
        errors: Object.entries(error.errors.ValidationErrorItem).map(
          (erroItem) => ''
        )
      }
    }
  } catch (error) {
    return error
  }
}
