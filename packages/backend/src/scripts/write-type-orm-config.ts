import { config } from '../config/config.service';
import fs = require('fs');
fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(config.getTypeOrmConfig(), null, 2),
);
