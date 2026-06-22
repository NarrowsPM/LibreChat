// Narrows PM config setup
const fs = require('fs');
const e = process.env;

const yaml = [
  'version: 1.0.9',
  'cache: true',
  'mcpServers:',
  '  microsoft365:',
  '    type: stdio',
  '    command: npx',
  '    args:',
  "      - '-y'",
  "      - 'microsoft365-mcp-server'",
  '    env:',
  "      MS365_AUTH_MODE: 'client-secret'",
  "      MS365_CLIENT_ID: '" + e.MS365_CLIENT_ID + "'",
  "      MS365_CLIENT_SECRET: '" + e.MS365_CLIENT_SECRET + "'",
  "      MS365_TENANT_ID: '" + e.MS365_TENANT_ID + "'",
  '  appfolio:',
  '    type: stdio',
  '    command: npx',
  '    args:',
  "      - '-y'",
  "      - '@fluegeldao/appfolio-mcp-server'",
  '    env:',
  "      VHOST: '" + e.APPFOLIO_VHOST + "'",
  "      USERNAME: '" + e.APPFOLIO_CLIENT_ID + "'",
  "      PASSWORD: '" + e.APPFOLIO_CLIENT_SECRET + "'"
].join('\n');

fs.writeFileSync('/app/config.yaml', yaml);
console.log('Config written with M365 and AppFolio credentials');
