# portafolio-web

Portafolio de Jesús Cochero: https://jesuscochero.web.app

Next.js (export estático) + Tailwind CSS, publicado en Firebase Hosting (Google Cloud).

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # genera out/
```

## Cómo se trabaja

`main` está protegida: no acepta push directo. Todo cambio entra por Pull Request y solo se puede
fusionar si pasa la revisión automática (`preview`: lint, build y vista previa).

```bash
git switch -c feat/mi-cambio
# ...cambios...
git commit -am "feat: describe el cambio"
git push -u origin feat/mi-cambio
gh pr create --fill
```

## Publicación

- **Automática:** cada push a `main` construye y publica el sitio (`.github/workflows/deploy.yml`).
- **Vista previa:** cada Pull Request publica una versión temporal y deja el enlace en el PR
  (`.github/workflows/preview.yml`).
- **A mano** (si hace falta):
  ```bash
  npm run build
  npx firebase-tools deploy --only hosting
  ```

El robot usa la cuenta de servicio `github-deploy@jesuscochero.iam.gserviceaccount.com`, guardada como
secreto `FIREBASE_SERVICE_ACCOUNT_JESUSCOCHERO` en GitHub.
