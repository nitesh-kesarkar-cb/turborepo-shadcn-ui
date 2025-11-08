# Building and Deploying Applications

This guide explains how to build and deploy the individual applications in this Turborepo monorepo.

## Building Applications

### Build All Applications
```bash
pnpm build
```
This builds all applications and packages using Turborepo's build pipeline.

### Build Individual Applications

#### Admin App
```bash
pnpm build:admin
# or
pnpm --filter admin-app build
```

#### Client App
```bash
pnpm build:client
# or
pnpm --filter client-app build
```

### Build Output Locations

After building, the production-ready files will be in:
- **Admin App**: `apps/admin-app/dist/`
- **Client App**: `apps/client-app/dist/`

These directories contain static files (HTML, CSS, JS) ready for deployment.

## Deployment Options

### Static Hosting (Recommended for Vite Apps)

Since both apps are built with Vite, they produce static files that can be deployed to any static hosting service:

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to the app directory: `cd apps/admin-app` or `cd apps/client-app`
3. Deploy: `vercel`
4. Or use Vercel's GitHub integration and set the root directory to `apps/admin-app` or `apps/client-app`

#### Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Navigate to the app directory: `cd apps/admin-app` or `cd apps/client-app`
3. Deploy: `netlify deploy --prod --dir=dist`
4. Or configure `netlify.toml`:
```toml
[build]
  command = "pnpm build"
  publish = "dist"
```

#### GitHub Pages
1. Build the app: `pnpm build:admin` or `pnpm build:client`
2. Copy the `dist` folder contents to your GitHub Pages branch
3. Or use GitHub Actions to automate the deployment

#### AWS S3 + CloudFront
1. Build the app: `pnpm build:admin` or `pnpm build:client`
2. Upload the `dist` folder contents to an S3 bucket
3. Configure CloudFront to serve from the S3 bucket

#### Docker Deployment
Create a Dockerfile in each app directory:

```dockerfile
# apps/admin-app/Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter admin-app build

FROM nginx:alpine
COPY --from=builder /app/apps/admin-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Environment Variables

If your apps need environment variables:

1. Create `.env.production` files in each app directory
2. Vite will use these during build: `VITE_*` variables
3. Access them in code: `import.meta.env.VITE_API_URL`

### CI/CD Pipeline Example

#### GitHub Actions
```yaml
name: Deploy Admin App

on:
  push:
    branches: [main]
    paths:
      - 'apps/admin-app/**'
      - 'packages/ui/**'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 10.15.0
      - uses: actions/setup-node@v3
        with:
          node-version: '24'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm build:admin
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.ADMIN_PROJECT_ID }}
          vercel-args: '--prod'
          working-directory: apps/admin-app
```

## Pre-deployment Checklist

- [ ] Build completes without errors: `pnpm build:admin` or `pnpm build:client`
- [ ] Test the production build locally: `pnpm --filter admin-app preview` or `pnpm --filter client-app preview`
- [ ] Environment variables are configured
- [ ] API endpoints are updated for production
- [ ] Assets and static files are loading correctly
- [ ] Check browser console for any errors

## Troubleshooting

### Build fails with module resolution errors
- Ensure all workspace dependencies are installed: `pnpm install`
- Check that `@repo/ui` package is built: `pnpm --filter @repo/ui build` (if it has a build step)

### Assets not loading in production
- Ensure asset paths are relative (Vite handles this automatically)
- Check that `base` option in `vite.config.ts` matches your deployment path

### Type errors during build
- Run type checking: `pnpm check-types`
- Fix any TypeScript errors before building

