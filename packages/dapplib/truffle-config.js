require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food educate release noble pupil coral light army gate'; 
let testAccounts = [
"0x756b37550497fe58fc7f78e2bb2609b7ba275294a424b4706b6211c222652990",
"0x71e3df86b6f1e5b73e1df10e930128b378baf607174130a49c7b461f093b7c28",
"0x51ef31665d4f09f846f143d4b6a1be88e0a28a77478d75040d6fc38b7578c50b",
"0x6aa5847b1a5ba4e71edd38f66fa992b1bf72683a3cd024b4ae86a81dcfc8a103",
"0xd1437de8948feea04fe410accda68e36067eca6e64991c6a58f25b7d3aa41dde",
"0x0e4372c6d67800ab8dcfe2503743aba26952eef478941c56657e4a1af9a489c2",
"0x5e0632c915f493a653ae90cc55ef7d7763ff0107ade7116989e6aa483686764a",
"0x134088c910751608eb4365c63964f13ae5e659693ecf0c63dfcedf677697a1d6",
"0x35ef976aca33ce500ae96509c808fbe093c6c242119bff1613d109181f227309",
"0x0ba4af79655791ae252d8112e21c27e3f4d1e7839250f5fee0ad24b7be687a1e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

