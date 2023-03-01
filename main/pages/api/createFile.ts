// pages/api/createFile.ts

import fs from 'fs';
import path from 'path';

export default function handler(req: any, res: any) {
  var { fileName, fileContent } = req.query;
  var filePath = path.join(process.cwd(), 'public', fileName);

  fs.writeFile(filePath, fileContent, err => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
    } else {
      res.status(200).send(`File ${fileName} created successfully`);
      console.log(fileContent);
    }
  });
}
