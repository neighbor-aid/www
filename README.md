# Neighbor Aid Website

This is the public-facing website for Neighbor Aid that can be found at https://neighboraid.co. This README explains how to work with this repository.

## Initial setup

This site is built using [Gatsby.js](https://www.gatsbyjs.org/). If you're new to developing with Gatsby and Node.js, we recommend you check out the Gatsby [introductory tutorials](https://www.gatsbyjs.org/tutorial/), especially for setting up your machine.

By the end of the machine setup tutorial, you should have the following installed on your machine:

1. Node
2. Mac: XCode & their coommand line tools
3. Git
4. The Gatsby CLI

Also highly recommended would be installing nvm. This will make working with Node versions much easier. [Click here for installation instructions.](https://github.com/nvm-sh/nvm#install--update-script)

## How to run locally

1. CD into this repo on the command line.
2. Run `nvm use` to use the version of node specified in `.nvmrc`.
3. Run `npm start` to spin up the local dev server. We use Gatsby's [Local HTTPS](https://www.gatsbyjs.org/docs/local-https/) option, so if this is the first time running that command, you will have to enter your system password, so a local certificate can be created.
4. Go to `https://neighboraid.local:8000` in your browser to see the site.

## Conventions

### Package installation

When installing npm packages, make sure you add the `--save-dev` flag if the package is only needed during development on your local machine. This helps keep the production bundle small.

Additionally, we use exact versioning for our project, which is enforced in our `.npmrc` file. We update packages on a regular basis as well.

### Code formatting

Gatsby comes with [prettier](https://prettier.io/) and we use that for automatic code formatting. Prettier is run before each commit using the husky npm package. Husky is configured in the `.huskyrc` file. Prettier is configured in the `.prettierrc` file.

### Code linting

Gatsby automatically ships with an eslint configuration. You will see the linting output when running `npm start` and doing development. **All warnings and errors found in the linter must be resolved before pushing your local code to the remote repository.**

### Commit messages

When commiting your code, use the conventions found in the article, ["How to Write a Git Commit Message"](https://chris.beams.io/posts/git-commit/). Of utmost importance is [using the imperative mood when writing your commit message](https://chris.beams.io/posts/git-commit/#imperative).

### Branching

We follow the [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) convention, which basically means that `master` mimics production, and all work should be done in feature branches off of master.

To have your code merged into master, push your feature branch up to origin and create a PR.

## Production

This project is hosted on [Netlify](https://www.netlify.com/). Any commits pushed to origin master trigger a Netlify build. If this build succeeds, the new updates are live.

