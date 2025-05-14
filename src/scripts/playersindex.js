const fs = require("fs");
const path = require("path");

const metadata = `
---
title: 'Players'
---
`;



const content = `${metadata}\n`;

fs.writeFileSync(path.join(__dirname, '../docs/index.md'), content);
