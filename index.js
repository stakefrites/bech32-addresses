const { fromBech32, toBech32 } = require("@cosmjs/encoding");

const listOfAddresses = [ "cosmos1c0829zzzlm7lujdf8nn3mrhmg9zjugqnrrtzdg", "cosmos1lt83tymrlkcg7jtfrzv5370z9uthttpvhf4jd7", "cosmos19muml8sjpnecnm8geul4l3zfju24l04mf8j3jv"];

const listOfPrefixes = ["akash", "juno", "cosmos", "sifchain"];

let addressesMap = {};
for (let add of listOfAddresses) {
    let decoded = fromBech32(add);
    addressesMap[add] = [];
    for (let prefix of listOfPrefixes) { 
        let address = toBech32(prefix, decoded.data);
        addressesMap[add].push(address)
    }
}

console.log(addressesMap)