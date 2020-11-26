import DataLoader from 'dataloader'
import db from '~database'

const { postModel } = db

const postLoader = new DataLoader(async (data) => {
  const keys = data.map((d) => d.id)
  const config = data[0].config
  console.log(
    'KEYS::',
    data,
    data.map((d) => d.id),
    config
  )
  const results = await postModel.findAll({
    where: { id: keys },
    raw: true,
    ...config
  })

  const re = keys.map((key) => results.find((r) => r.id == key) || {})
  console.log(re)
  return re
})

export { postLoader }
