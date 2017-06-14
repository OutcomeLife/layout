#!/bin/bash
REACT_APP_QWANDA_API_URL=https://qwanda-service.outcome-hub.com ./create_properties_file.sh
npm install -g serve
npm run build
npm start

