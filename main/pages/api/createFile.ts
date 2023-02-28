import fs from 'fs';
import path from 'path';

export default function handler(req: any, res: any) {
  var { fileName, fileContent } = req.query;
  var filePath = path.join(process.cwd(), 'public', fileName);

  fs.writeFile(filePath, fileContent, function (err) {
    if (err) {
      res.status(500).send('Error creating file');
      throw err;
    } else {
      res.status(200).send(`File ${fileName} created successfully`);
    }
  });
}
