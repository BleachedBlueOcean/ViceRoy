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

## check that you are in the right branch
```
> git branch
```

## update your main branch
```
> git checkout main
> git pull --rebase upstream main
(or git pull origin main)
> npm i 
```
## make a new branch
```
> git checkout -b your-branch
```
## merge with your branch with updated main
```
> git checkout main
> git pull --rebase upstream main
(or git pull origin main)
> git checkout your-branch
> git merge main
> npm i
```
## write code, commit, repeat
```
> git status
> git add [filenames here]
> git commit -m “message goes here”
> git push origin your-branch 
```
## fix bugs, commit
```
git add .
git commit -m "insert message here"
git pull --rebase upstream main
git push origin your-branch
```




