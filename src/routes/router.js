const express = require('express')
const router= express.Router()
const bodyParser = require('body-parser')
const pcs = require('../model/pcs')
const newPcH = require('../handlers/newPcH')

router.get('/all', (req, res) => {
    res.json(JSON.stringify(pcs))
})

router.post('/new', bodyParser.json(), (req,res) => {
    let type = req.body.type
    let patrimonio = req.body.patrimonio
    let processador = req.body.processador
    let memoria = req.body.memoria
    let disco = req.body.disco
    let pv = req.body.pv
    let setor = req.body.setor
    
    pcs.push(newPcH.newPc(type, patrimonio, processador, memoria, disco, pv, setor))
    res.send("Equipamento Adicionado")

})

module.exports = router

