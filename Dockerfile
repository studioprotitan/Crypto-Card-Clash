# ---- Build Stage ----
FROM node:22-alpine AS builder

WORKDIR /app

# Copy manifests first (better caching)
COPY package.json package-lock.json* ./

# Use npm install instead of npm ci to avoid lockfile mismatch errors
RUN npm install --legacy-peer-deps

# Copy rest of source
COPY . .

# Build TS -> JS
RUN npm run build

# ---- Production Stage ----
FROM node:22-alpine AS runner

WORKDIR /app

# Copy only built artifacts + node_modules
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
