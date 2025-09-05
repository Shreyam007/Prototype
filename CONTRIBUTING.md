# Contributing Guide 🚀

Welcome! Thank you for your interest in contributing. This guide will help you get started step by step, with interactive tips and some Vim basics to make your workflow smoother.

---

## 1. Fork & Clone the Repository

1. **Fork** this repository to your GitHub account.
2. **Clone** your fork to your local machine:

   ```bash
   git clone https://github.com/<your-username>/Project.git
   ```

   _Tip: Replace `<your-username>` with your GitHub username!_

---

## 2. Set Upstream Remote

- **Upstream** is the main repository. Add it to keep your fork up to date:

  ```bash
  git remote add upstream https://github.com/BugBusters2025/Project.git
  ```

- **Sync with Upstream:**

  ```bash
  git checkout main
  git pull upstream main
  ```

  _Tip: Always pull latest changes before starting new work!_

---

## 3. Create a Branch & Make Changes

- **Create and switch to a new branch:**

  ```bash
  git checkout -b <branch-name>
  ```

  _Tip: Use descriptive branch names, e.g., `fix/readme-typo`._

- **Stage your changes:**

  ```bash
  git add <file>
  # or add all changes
  git add .
  ```

- **Commit your changes:**

  ```bash
  git commit -m "Describe your change"
  ```

  _Tip: Keep commit messages clear and concise!_

---

## 4. Unstage or Stash Changes

- **Unstage a file:**

  ```bash
  git restore --staged <file>
  ```

- **Stash non-staged changes:**

  ```bash
  git stash
  ```

---

## 5. Rebase, Delete Branch, and Push

- **Rebase your branch (to update with main):**

  ```bash
  git rebase main
  ```

- **Delete a branch:**

  ```bash
  git branch -D <branch-name>
  ```

- **Push your branch to your fork:**

  ```bash
  git push origin <branch-name>
  ```

  _Tip: If you need to force push (use with caution):_

  ```bash
  git push origin -f <branch-name>
  ```

---

## 6. Create a Pull Request

- Go to your fork on GitHub and click **"Compare & pull request"**.
- Fill in the PR template and submit!

---

## 7. Useful Git Commands

- **View commit log:**

  ```bash
  git log
  ```

  _Press `q` to quit log view._

- **Check status:**

  ```bash
  git status
  ```

- **Reset to a previous commit:**

  ```bash
  git reset <commit-hash>
  ```

- **Amend last commit:**

  ```bash
  git commit --amend
  ```

---

## Vim Quick Guide 📝

Vim is a powerful text editor often used in Git for writing commit messages. Here are some basics:

- **Open Vim:**  
  `vim <file>`

- **Modes:**

  - `i` : Insert mode (start typing)
  - `Esc` : Normal mode (navigate, save, quit)
  - `:w` : Save file
  - `:q` : Quit Vim
  - `:wq` : Save and quit
  - `:q!` : Quit without saving

- **Editing:**

  - Move cursor: Arrow keys or `h` (left), `j` (down), `k` (up), `l` (right)
  - Delete line: `dd`
  - Undo: `u`
  - Redo: `Ctrl + r`

- **Saving and Exiting:**
  - Press `Esc` to enter normal mode, then type `:wq` and press `Enter` to save and exit.

_Stuck in Vim? Press `Esc`, then type `:q!` and hit `Enter` to quit without saving._

---
