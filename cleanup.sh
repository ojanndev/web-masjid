#!/bin/bash

# Remove duplicate and unnecessary files
rm -f server/src/models/models.ts
rm -f server/src/config/db.ts

# Clean up node_modules and cache
rm -rf node_modules
rm -rf dist
rm -rf .cache
npm cache clean --force

# Reinstall dependencies
npm install

# Start development server
npm run dev