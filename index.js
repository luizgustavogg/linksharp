import express from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const App = express()

App.use(express.json())

App.post ('/shorten', async (req, res) => {
    let { urlOriginal, shortCode } = req.body
    urlOriginal.startsWith("https://") ? urlOriginal : urlOriginal = "https://"+urlOriginal
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var verifySpace = /\s/g 
    var urlValid = /^((www\.)?[a-z0-9\-]+(\.[a-z]{2,})+(\/.*)?|magnet:\?xt=urn:btih:[a-zA-Z0-9]+)$/i;


    if(urlValid.test(urlOriginal)){ // Contem url original
        return res.status(400).json({
            "message": "Url precisa ser valida!",
            "code": 400
        })
    }

    if(format.test(shortCode)){
        return res.status(400).json({ // Contem Caracteres Especiais
            "message": "Contem caracteres especiais!",
            "code": 400
        }).end()
    }

    if(verifySpace.test(shortCode)){ // Contem Espaço no ShortCode! 
        return res.status(400).json({
            "message": "Não pode ter espaço no Shortcode!",
            "code": 400
        }).end()
    }

    if(shortCode.length > 30){ // Máximo de Caracteres
        return res.status(400).json({
            "message": "Máximo de caracteres atingida!",
            "code": 400
        }).end()
    }

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