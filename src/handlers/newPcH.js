const pcs = require('../model/pcs')

module.exports = {
        newPc (t, p, pr, m, d, pv, s) {
        return  {
                type:t,
                patrimonio: p,
                processador:pr, 
                memoria: m,
                disco: d,
                pv: pv,
                setor: s
            }
        },
      

}