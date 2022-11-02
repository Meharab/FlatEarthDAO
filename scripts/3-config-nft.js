import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0x6Ee8e60443727aCE3852E671Da58da8681a46C74");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Flat Earth Safe House",
        description: "This NFT will give you access to FlatEarthDAO!",
        image: readFileSync("scripts/assets/flatearth.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();