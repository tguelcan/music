# Sveltekit Music App Example

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftguelcan%2Fmusic&env=SPOTIFY_CLIENT_ID,SPOTIFY_CLIENT_SECRET&envDescription=Spotify%20client%20id%20and%20secred%20needed%20for%20this%20application&project-name=musicapp)

## Develope

```bash
# 1. clone this repository
git clone https://github.com/tguelcan/music.git
```

```bash
# rename .env.example to .env and complete the variables with spotify client id and client secret
mv .env.example .env
```

```bash
# run local
yarn && yarn dev
```

## Deploy

For vercel, you do not need any further configuration except to adjust the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftguelcan%2Fmusic&env=SPOTIFY_CLIENT_ID,SPOTIFY_CLIENT_SECRET&envDescription=Spotify%20client%20id%20and%20secred%20needed%20for%20this%20application&project-name=musicapp)

> To deploy your app with another adapter, take a look [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
