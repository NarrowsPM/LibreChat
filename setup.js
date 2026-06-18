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
  "      MS365_TENANT_ID: '" + e.MS365_TENANT_ID + "'"
].join('\n');

fs.writeFileSync('/app/config.yaml', yaml);
console.log('Config written with real credentials');
