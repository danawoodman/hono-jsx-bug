# hono-jsx-bug

## Reproduction

```shell
npm create cloudflare@latest hono-jsx-bug
cd hono-jsx-bug
npm install hono
```

Follow instructions [here](https://hono.dev/docs/guides/jsx):

Add `"jsxImportSource": "hono/jsx"` to `tsconfig.json`.

Update `wrangler.toml` to reference `main = "src/index.tsx"`.
