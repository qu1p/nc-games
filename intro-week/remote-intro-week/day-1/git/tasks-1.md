1. Use `pwd` and `ls` to check where you are in your terminal
2. Navigate to the `intro-week` folder you created earlier
3. Make a new folder inside here called `git-practice`
4. Navigate into this folder and run `ls -a`: what does the `.` and `..` refer to?
5. To turn this folder into a git repository, run `git init`
6. Run `ls -a` again to see the `.git` directory which means your repository has been successfully initialised
7. Create a new file called `films.txt` and add a film title here.
8. Run `git status` to see that this change you've made is currently untracked by git
9. Add this file you've created to git's staging area
10. Run `git status` again to see that this file is now is the staging area
11. Commit this change
12. Run `git status` to see that your working directory is now empty, then run `git log` - what does this command seem to show you?
13. Add another film to the `films.txt` file then repeat steps 8-12 to commit this change
14. Add a final film to `films.txt`. Now create another file called `snacks.txt` and add your favourite film-night snacks to it.
15. As the above changes are unrelated, make two separate commits for these changes (remember you will need to add and commit the files individually).
