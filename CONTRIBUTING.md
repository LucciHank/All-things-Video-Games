# Contribution Guidelines

Thank you for taking an interest in contributing to All Things Video Games! These guidelines will help you get started and avoid the common contribution pitfalls.

## Environment Setup

These are the steps you will need to follow to create a contribution-ready local environment.

### Prerequisites

- [Node.js](https://nodejs.org/en) version 20.0 or higher
- npm or yarn package manager

### Fork and Clone

1. Create a fork of this repository by clicking [here](https://github.com/NSCC-ITC-Winter2026-WEBD3030-700-MCa/All-things-Video-Games/fork)
2. Clone the repository:
    ```bash
    git clone https://github.com/YOUR-USERNAME/All-things-Video-Games.git
    ```
3. Add upstream remote:
    ```bash
    git remote add upstream https://github.com/NSCC-ITC-Winter2026-WEBD3030-700-MCa/All-things-Video-Games.git
    ```

### Install Dependencies

1. Move into the repository:
    ```bash
    cd All-things-Video-Games
    ```
2. (Optional) Install Husky for strict conventional commits:
    ```bash
    npm install
    ```
3. Move into repository subfolder:
    ```bash
    cd all-things-video-games
    ```
4. Install dependency packages:
    ```bash
    npm install
    ```
5. Start the development server
    ```bash
    npm run start
    ```
The site will open at http://localhost:3000 and automatically reload when you make changes.

## Before Contributing

Before making any contributions, double check all of the following:

1. Ensure there are no existing issues or pull requests that overlap your contribution topic
2. Make sure to check closed pull requests or issues in case your contribution topic has already been resolved or was denied for any reason
3. Pull from upstream main to guarantee an up-to-date working environment
    ```bash
    git switch main
    git pull upstream main
    git push origin main
    ```

## Contribution Workflow

To make your first contribution, follow these steps:

1. Create an [issue](https://github.com/NSCC-ITC-Winter2026-WEBD3030-700-MCa/All-things-Video-Games/issues) if there are none that cover your contribution topic yet **OR** assign yourself to an existing issue by commenting the following message exactly:
    ```
    I would like to work on this please!
    ```
    *See [this page](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue) for help on creating an issue*
2. Create a feature branch:
    ```bash
    git checkout -b branch-name
    ```
3. Make changes on the feature branch
4. Stage and commit changes:
    ```bash
    git add .
    git commit -m "commit-message"
    ```
    *see [this page](https://www.conventionalcommits.org/en/v1.0.0/) for instructions on conventional commit format*
5. Push to origin:
    ```bash
    git push origin branch-name
    ```
6. Create a pull request
    1. Go to your GitHub fork page
    2. Click on the green "Compare & pull request" button
    3. Fill out the pull request with the related issue number (e.g. "Closes #12"), a list of all changes made, and any screenshots deemed necessary