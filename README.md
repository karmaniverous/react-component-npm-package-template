# React Component NPM Package Template

## Why?

Setting up an NPM package to deliver a React component requires a lot of
scaffolding. This template allows you to get started right away writing ES6
component code and writing tests leveraging Mocha, Chai, and the React Testing
Framework.

Have fun!

## `release-it` Configuration

This template includes [release-it](https://github.com/release-it/release-it)
support that requires these final configurations:

1. Create a copy of `.env.local.template` and name it `.env.local`

1. Create a GitHub
   [personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
   and add it as the value of `GITHUB_TOKEN` in `.env.local`.

1. In `package.json`, set `release-it.npm.publish` to `true`.

You can now build your project and publish a release to GitHub and NPM with
these commands:

```
npm run build
npm run release
```

## Integrating Template Updates

Follow
[these instructions](https://karmanivero.us/blog/installing-github-repo-template-updates/)
