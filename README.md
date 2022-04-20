# Bech 32 helper

## What

This script uses @cosmjs/encoding to convert bech32 addresses into a list of prefixes.

## How

1. Clone the repo

```sh

git clone https://github.com/stakefrites/bech23-addresses
cd bech32-addresses
yarn
```

2. Change the values in `index.js` by adding the addresses you're targeting and the list of prefixes

```js
const listOfAddresses = [ "cosmos1c0829zzzlm7lujdf8nn3mrhmg9zjugqnrrtzdg", "cosmos1lt83tymrlkcg7jtfrzv5370z9uthttpvhf4jd7", "cosmos19muml8sjpnecnm8geul4l3zfju24l04mf8j3jv"];
const listOfPrefixes = ["akash", "juno", "cosmos", "sifchain"];

```

3. Run
```
yarn run go
```


## Stake Frites 🥩 🍟 - Proof of stake validators
### Stake safely my friends 🥩🍟
Stake Frites is a bunch of french canadians entrepreneurs from Quebec, Canada. We believe in Cosmos and are actively participating in building stuff for the ecosystem. Consider delegating to our validators on a few different chains: Nomic, Atom, Akash, Evmos, Sifchain to only name a few.