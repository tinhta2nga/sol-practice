import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
import "dotenv/config";

const newkeypair = Keypair.generate();
const load = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The public key is: `, newkeypair.publicKey.toBase58());
console.log(`The secret key is: `, newkeypair.secretKey);
console.log(`✅ Finished!`);
console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`,
  );

  