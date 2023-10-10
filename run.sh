#!/usr/bin/env node
echo "running back & front"
(npm i && npm run server) & (npm run build && npm run preview)
