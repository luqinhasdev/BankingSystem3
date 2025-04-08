import Conta from './Conta.js';

class ContaCorrente extends Conta {
    constructor(agencia, numero, saldo, cliente) {
        super(agencia, numero, saldo);
    }

    sacar(valor) {
        if (valor > this._saldo) {
            throw new Error("SALDO INSUFICIENTE PARA SAQUE. )=");
        }
        this._saldo -= valor;
        console.log(`SAQUE DE ${valor} EFETUADO COM SUCESSO! =)`);
    }
}
// ~
export default ContaCorrente;