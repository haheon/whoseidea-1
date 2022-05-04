import { isAuthorized } from '../tokenFunctions'
import { PrismaClient } from '@prisma/client'

export async function uploadUserImage(req:any,res:any) {
    // 인자가 없으면 오류 처리
    if (!req.query.nickname)
        return res.status(406).send('postId is empty')

    // 토큰이 맞지 않으면 오류 처리
    if(!isAuthorized(req))
        return res.status(405).send('Mismatched Cookies')
    
    try {
        const prisma = new PrismaClient()
        await prisma.users.updateMany({
            where: {
                nickname:req.query.nickname
            },
            data: {
                profile: `https://whoseidea-image.s3.ap-northeast-2.amazonaws.com/${req.file.key}`
            }
        })
        return res.status(200).send('ok')
    } catch (error) {
        return res.status(501).send(error)
    }
}