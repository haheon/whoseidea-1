import { prisma } from '../db'
import { Request, Response } from 'express'

export async function transmissionUrl (req: Request, res: Response) {
    if (!req.query.postId) {
        res.status(420).send('invaild postId')
    } else {
        const url: any = await prisma.files.findMany({
            where: {postId: Number(req.query.postId)}
        })
        let reUrl = url.map(function(obj: any) {
            let img = {}
            img = obj.url
            return img 
        })
        return res.status(210).send(reUrl)
    }
}