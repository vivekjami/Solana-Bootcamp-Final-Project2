import {Connection, Keypair, PublicKey} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
  createUserRecordSendAndConfirm,
  deriveRecordPDA,
  getRecord,
  initializeClient,
  registerIncomeSendAndConfirm,
  registerOutcomeSendAndConfirm
} from "budget_tracker" ;
import * as console from "console";

async function main(feePayer: Keypair) {
  const connection = new Connection("http://127.0.0.1:8899", {
    commitment: "confirmed"
  });
  // TODO: Paste your ProgramId HERE in the PublicKey
  const progId = new PublicKey("AkDWD3gxdndyw6nwGuH8s8rj9j1iUmgpYPq6zcQTi27e");

  initializeClient(progId, connection);

  /**
   * 0. Derive Record PDA to retrieve from Blockchain
   */
  const [recordPub] = deriveRecordPDA({
    index: 0,
    signer: feePayer.publicKey,
  }, progId);

  /**
   * 1. Create a user record, logs the state of the account after creating it
   */
  await createUserRecordSendAndConfirm({
    userName: "John Doe",
    userRecordSeedIndex: 0,
    signers: {
      feePayer
    }
  });
  let record = await getRecord(recordPub);
  console.info(record);

  /**
   * 2. Registered a new income with a value of 100
   */
  await registerIncomeSendAndConfirm({
    amount: 100,
    userRecordSeedIndex: 0,
    signers: {
      feePayer
    }
  });
  record = await getRecord(recordPub);
  console.info(record);

  /**
   * 3. Registered a new outcome with a value of 50
   */
  await registerOutcomeSendAndConfirm({
    amount: 50,
    userRecordSeedIndex: 0,
    signers: {
      feePayer
    }
  });
  record = await getRecord(recordPub);
  console.info(record);
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
        .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));