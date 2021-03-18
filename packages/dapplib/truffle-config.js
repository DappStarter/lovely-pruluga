require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name return six pulse install deposit equal gather'; 
let testAccounts = [
"0xae937f1783bb8ec10c7632e3568cb7ecbd9c244eee9213b47ce4d8a84a826ef6",
"0x87d3aab0f69f85550ba9de87b80bb92637e0874d3c3ac847099977e9077ac12c",
"0x34d2fdbd2536190acdf2d426d87adc8331927a84de7f0d0cc28644a31a54682e",
"0x2f353abe1766420ee623b4d71b79e4a810714426bd4dded245ee83cf64f032b6",
"0x87a346ea80f3c936a0b7f9e7de6df910f1cae757edc1fb0314282301cc58a476",
"0x3e0ec3eae21ce81d38142284cf02d5543aca5213f4101f1cddb10e9324755178",
"0xefd7db79f8ebaf72a8ef88956c8937f1ec5d29a703dd781e256975d92c8356b5",
"0x708f301341b7bf8807fe4967db1949ba25d5864059b62e88b3a327970087516c",
"0xe8182756295f13d979d18ab156485250ede305a6860d91a124b5b926aa6cd89c",
"0xbffc969f35bb3ed7c89425dd29abadfa68b3de65e99459cb6f8752df57016471"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
