import crypto from 'crypto'

const ENCRYPT_KEY = process.env.ENCRYPT_KEY
const ALGORITHM = 'sha256'

const encrypt = (data) => {
  try {
    let hmac = crypto.createHmac(ALGORITHM, `${ENCRYPT_KEY}`)
    return hmac.update(data).digest('hex')
  } catch (error) {
    return false
  }
}

const encryptCompare = (password, hash) => {
  return encrypt(password) === hash
}

export { encrypt, encryptCompare }
