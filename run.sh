#!/usr/bin/env node
echo "running back & front"
(npm run server) & (npm run build && npm run preview)
