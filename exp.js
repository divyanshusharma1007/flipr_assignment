import axios from "axios";
import fs from "fs/promises"; // Using fs.promises for async file operations

const options = { method: 'GET', url: 'http://api.nobelprize.org/v1/prize.json' };

axios.request(options)
  .then(async function (response) {
    const data = JSON.stringify(response.data.prizes, null, 2);

    await fs.writeFile('data.js', `const NobelPrizeData = ${data};\n\nexport default NobelPrizeData;`);
    console.log('Data has been saved to data.js');
  })
  .catch(function (error) {
    console.error(error);
  });
