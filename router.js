import Router from "express"
import PostController from "./PostController.js"


const router = new Router()

router.post('/posts',  PostController.create)
router.get('/posts')
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')

export default router