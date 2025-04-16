import express from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const App = express()

App.use(express.json())

App.post ('/shorten', async (req, res) => {
    let { urlOriginal, shortCode } = req.body
    urlOriginal.startsWith("https://") ? urlOriginal : urlOriginal = "https://"+urlOriginal

    const urlShort = await prisma.link.findUnique({
        where:{
            shortCode: shortCode
        }
    })
    
    if(urlShort){ // ShortCode ja existe
        return res.status(400).json({
            "message": "Este shortcode já esta sendo utilizado!",
            "code": 400
        }).end()
    }

    if(shortCode.length > 30){ // Máximo de Caracteres
        return res.status(400).json({
            "message": "Máximo de caracteres atingida!",
            "code": 400
        }).end()
    }

    const CreateUrl = await prisma.link.create({
        data:{
            urlOriginal: urlOriginal,
            shortCode: shortCode
        }
    })

    res.status(201).json({
        "urlOriginal": urlOriginal,
        "shortCode": shortCode
    }).end()
})

App.get('/:shortCode', async (req, res) => {
    const { shortCode } = req.params
 
    const urlShort = await prisma.link.findUnique({
        where:{
            shortCode: shortCode
        }
    })
    
    if(!urlShort){ // Não existe este shortcode
        return res.status(404).json({
            "message":"Link não encontrado",
            "code": 400
        }).end()
    }

    console.log(urlShort.urlOriginal)

    res.redirect(urlShort.urlOriginal)
})

App.listen(3000)