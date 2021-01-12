# Family Tree UI

# Getting Started

### Installation process

1. install npm packages

```sh
npm install
```

1. create `.env` file with environment variables

```env
API_URL=https://api.familytree.dev.qsupport.ru/api
CAPTCHA_SITEKEY=paste_sitekey
```

1. run development server

```
npm run dev
```

4. (optional) run production server

```
npm run build
npm run start
```

### Software dependencies

- nodejs (12+)
- npm (comes with nodejs)

# Build and test

1. build docker image

```sh
docker build -t familytree-front .
```

2. run docker image within container

```sh
docker run -p 80:7777 --rm --name=familytree-front familytree-front
```

# Workflow

1. create new branch from `master`

> branch naming should be according [**git-flow**][git-flow]
>
> `feature/short-task-description` – use kebab-case

1. after finishing work with branch create _Pull Request_
2. in _PR_ select **Work Items** and **Reviewers**
3. after merging with `master` it will be pushed to test stand

> remove branch after work is done

### Husky

Before every commit _lint-staged_ lints files and before every push _eslint_ run for through the whole repository.

To disable git hooks prepend command with variable. Use it only for `git rebase`

```sh
HUSKY_SKIP_HOOKS=1 git rebase ...
```

### For commit format use [this guide][commit-guide]

[git-flow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[commit-guide]: https://chris.beams.io/posts/git-commit/#seven-rules
