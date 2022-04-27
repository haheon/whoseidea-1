import { signup } from './users/signup'
import { signout } from './users/signout'
import { login } from './users/login'
import { logout } from './users/logout'
import { auth } from './users/auth'
import { updatePro } from './users/updatePro'
import { myPost } from './users/my-post'
import { myComment } from './users/my-comment'
import { postAll } from './post/postAll'
import { getComment } from './comment/getComment'

const controllers = {
    signup:signup,
    signout:signout,
    login:login,
    logout:logout,
    auth:auth,
    updatePro:updatePro,
    myPost:myPost,
    myComment:myComment,
    postAll:postAll,
    getComment:getComment,
}

export default controllers
