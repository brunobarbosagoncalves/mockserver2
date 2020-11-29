export default (error) => {
  try {
    if (error.origin === 'graphql') {
      const errorFormated = {
        origin: 'graphql',
        message: error.message || '',
        statusCode: null,
        statusName: null,
        path: `${JSON.stringify(error.path)} > ${JSON.stringify(
          error.locations
        )}`,
        brute: JSON.stringify(error)
      }

      console.log(errorFormated)
    }
  } catch (error) {
    return error
  }
}
