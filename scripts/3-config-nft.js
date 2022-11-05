import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xc2e2D61553c5C4e4157d9a282705DCCFF094Af5a", "edition-drop");
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