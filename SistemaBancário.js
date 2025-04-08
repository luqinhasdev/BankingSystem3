import Banco from './Banco.js';
import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaPoupanca from './ContaPoupanca.js';

let Nubank = new Banco("Nubank", "001");

let correnteJoão = new ContaCorrente("001", "12345", 150, 50, Nubank);
let poupancaPedro = new ContaPoupanca("001", "67890", 50, Nubank);

let João = new Cliente("João", 18, correnteJoão);
let Pedro = new Cliente("Pedro", 98, poupancaPedro);

Nubank.adicionarCliente(João);
Nubank.adicionarCliente(Pedro);
Nubank.adicionarConta(correnteJoão);
Nubank.adicionarConta(poupancaPedro);

correnteJoão.deposito(250);
poupancaPedro.deposito(100);

correnteJoão.sacar(400);
poupancaPedro.sacar(50);