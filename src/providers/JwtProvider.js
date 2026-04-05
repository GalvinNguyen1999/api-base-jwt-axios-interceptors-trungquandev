// Author: TrungQuanDev: https://youtube.com/@trungquandev
import JWT from 'jsonwebtoken'

// ** Hàm tạo JWT Token **
// Tham số 1: userInfo: Thông tin user cần mã hóa vào token
// Tham số 2: secretSignature: Chữ ký bí mật để mã hóa token
// Tham số 3: tokenLife: Thời gian sống của token
const generateToken = async (userInfo, secretSignature, tokenLife) => {
  try {
    return JWT.sign(userInfo, secretSignature, {
      algorithm: 'HS256',
      expiresIn: tokenLife
    })
  } catch (error) {
    throw new Error(error)
  }
}

// ** Hàm giải mã JWT Token **
// Tham số 1: token: Token cần giải mã
// Tham số 2: secretSignature: Chữ ký bí mật để giải mã token
// => Đảm bảo secretSignature giống với secretSignature khi tạo token
const verifyToken = async (token, secretSignature) => {
  try {
    return JWT.verify(token, secretSignature)
  } catch (error) {
    throw new Error(error)
  }
}

export const JwtProvider = {
  generateToken,
  verifyToken
}
