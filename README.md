# backend-template

Boilerplate to start new backend projects at Feracode.

## Scripts
| Command      | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| **start**    | Same as `dev`                                                |
| **dev**      | Run development server                                       |
| **build**    | Compile Typescript                                           |
| **lint**     | Lint js, ts, jsx and tsx files                               |
| **test**     | Run unit and integration tests                               |
| **coverage** | Run unit and integration tests and export coverage           |
| **release**  | Bump version in metadata and generate git tags and changelog |

## Setup

### Dependencies

Run `yarn install`.

### IDE

Make sure you have Prettier and ESLint extensions installed according to your editor.

### Coveralls

Visit coveralls.io and connect your account using GitHub. Enable this repository and copy the `token` displayed to clipboard.

### CircleCI

Visit circleci.com/dashboard and connect your account using GitHub. Go to Add Projects and enable this repository. Under Settings --> Projects --> \<Project Name> --> Environment Variables, add variable `COVERALLS_REPO_TOKEN` with the value copied from `token` before.

## Contributing

### Conventional Commits

The [Conventional Commits](https://www.conventionalcommits.org) specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

#### Structure

The commit message should be structured as follows:

```
<type>([optional scope]): <description>

[optional body]

[optional footer]
```

#### Elements

The main structural elements are:

| Element         | Description                              | Where to use | Correlates to (SemVer) |
| --------------- | ---------------------------------------- | ------------ | ---------------------- |
| fix             | patches a bug in the codebase            | \<type>      | PATCH (1.0.1)          |
| feat            | introduces a new feature to the codebase | \<type>      | MINOR (1.1.0)          |
| BREAKING CHANGE | introduces a breaking API change         | \<body>      | MAJOR (2.0.0)          |

##### Types

Available <b>types</b> that can be used are:

- <b>build</b>: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- <b>ci</b>: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- <b>docs</b>: Documentation only changes
- <b>feat</b>: A new feature
- <b>fix</b>: A bug fix
- <b>perf</b>: A code change that improves performance
- <b>refactor</b>: A code change that neither fixes a bug nor adds a feature
- <b>style</b>: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- <b>test</b>: Adding missing tests or correcting existing tests
- <b>chore</b>: Updating grunt tasks etc; no production code change

#### Examples

Commit message with description and breaking change in body:

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

Commit message with optional `!` to draw attention to breaking change:

```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

Commit message with no body:

```
docs: correct spelling of CHANGELOG
```

Commit message with scope:

```
feat(lang): add polish language
```

Commit message for a fix using an (optional) issue number:

```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```
### Commitizen

[Commitizen](https://github.com/commitizen/cz-cli) is a CLI tool to help commiting according to Conventional Commits rules, among others.

![Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

##### Installing

```
npm install -g commitizen cz-conventional-changelog
```

Or if you are using Yarn:

```
yarn global add commitizen cz-conventional-changelog
```

##### Configuring the repository

Add the following to `package.json`:

```
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```
