# portafolio-web

Portafolio de Jesús Cochero: https://jesuscochero.dev

Next.js (export estático) + Tailwind CSS, publicado en Firebase Hosting (Google Cloud).

## Dominio

`jesuscochero.dev` está registrado en Cloudflare y su DNS apunta a Firebase Hosting (registros en modo
«DNS only», sin proxy). `www.jesuscochero.dev` redirige al dominio principal. `jesuscochero.web.app`
sigue funcionando como dirección de Firebase.

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `199.36.158.100` |
| TXT | `@` | `hosting-site=jesuscochero` |
| CNAME | `www` | `jesuscochero.web.app` |

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

## Versiones

El portafolio usa versiones `MAYOR.MENOR.PARCHE` ([SemVer](https://semver.org/lang/es/)):

- **PARCHE** (`0.2.1`): corregir un texto o un detalle.
- **MENOR** (`0.3.0`): algo nuevo, como un proyecto o una sección.
- **MAYOR** (`1.0.0`): un cambio grande, como un rediseño.

Para sacar una versión, dentro del PR:

```bash
npm version minor --no-git-tag-version   # o patch / major
```

Al fusionar el PR en `main`, `.github/workflows/release.yml` crea el tag `vX.Y.Z` y la
[Release](https://github.com/JesusCocheroMeg/portafolio-web/releases) con la lista de PRs. La versión
se ve en el pie de página y enlaza a su Release. Si `package.json` no cambia de versión, no se crea nada.

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
