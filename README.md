# BlueOcean

## Instructions to run client and server

### If you haven't already 

```
> npm i 

```
### Then:

```
> npm run dev

```
### Then head to: http://127.0.0.1:5173/

# Git Workflow
## update your main branch
```
> git checkout main
> git pull --rebase upstream main
(or git pull origin main)
```
## make a new branch
```
> git checkout -b your-branch
```
## merge with your branch with update main
```
> git checkout your-branch
> git merge main
```
## write code, commit, repeat
```
> git status
> git add [filenameshere]
> git commit -m “message goes here”
> git push origin your-branch 
```

## if pull request is rejected
## fix bugs, commit
git add .
git commit -m "insert message here"
git pull --rebase upstream main
git push origin feature-branch




