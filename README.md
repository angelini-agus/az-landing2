# AZ Landing

Landing page project for AZ Servicios de Limpieza.

## ERP Proxy Integration

The internal ERP (Angular) is proxied under the `/login` prefix via Vercel rewrites in `vercel.json`:
- `/login` → proxies to the root of the ERP application (`https://az-sistema-prod-angelini-agus-projects.vercel.app/`).
- `/login/:path*` → proxies subroutes and assets (`https://az-sistema-prod-angelini-agus-projects.vercel.app/:path*`).

### Session Redirection
Authenticated users (detected via `az_erp_session` or `currentUser` in `localStorage`) visiting `/` are automatically redirected to `/login/inicio`.

