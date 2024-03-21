import {Router} from "express"
import {Todo} from "..//module/todo"
const router=Router()
type reqBody={text:string}
type reqParams={id:string}
const todos:Todo[]=[]

router.get("",(req,res)=>{
    res.status(200).send({todos:todos})

})
router.post("/addTodo",(req,res)=>{
    const body=req.body as reqBody
    var data={
        id:new Date().toISOString(),
        text:body.text
    }
    todos.push(data)
    return res.status(200).send("data added successfully")
})

router.put("/updateTodo/:id",(req,res)=>{
    const body=req.body as reqBody
    const index=todos.findIndex((item)=>item.id==req.params.id)
    todos[index]={
        id:todos[index].id,
        text:body.text
    }
    return res.status(200).send("data updated successfully")
})

router.delete("/updateTodo/:id",(req,res)=>{
    const params=req.params as reqParams
    const todo=todos.filter((item)=>item.id!==params.id)
    return res.status(200).send("data deleted successfully")
})






export default router