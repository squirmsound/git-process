```
$ git log --format=%s | cut -f 2 -d ' ' | sed 's/#\(.*\)/\1/' | sort -n | uniq > refs.txt
```

Explanation:
1. `git log --format=%s` displays the first line of every commit message
2. `cut -f 2 -d ' '` splits the line by a space, and prints the second part of the (the #SOME_NUMBER portion)
3. `sed 's/#\(.*\)/\1/'` removes the number sign from the number
4. `sort` sorts the entries in ascending numerical order
5. `uniq` ensures that each number is only printed once
6. `> refs.txt` prints the output to a file called refs.txt.

```
$ git log --format=%s > changelog.txt
```
Will output 
```
commit cd71bd19793bf6c0b370d19b2a2a8f02f2638cdb (HEAD -> master, origin/master)
Author: AGUIA156 <adrian.a.aguirre@disney.com>
Date:   Mon Jun 18 15:05:16 2018 -0700

    Add git documentation

```
Explanation:
1. `git log --format=%s` displays the first line of every commit message

Explanation:
1. `git log --format=%s` displays the first line of every commit message
6. `> refs.txt` prints the output to a file called refs.txt.


```
git log --oneline 4f46a36...97f6958
```

Explanation:
1. `git log --format=%s` displays the first line of every commit message
2. `cut -f 2 -d ' '` splits the line by a space, and prints the second part of the (the #SOME_NUMBER portion)
3. `sed 's/#\(.*\)/\1/'` removes the number sign from the number
4. `sort` sorts the entries in ascending numerical order
5. `uniq` ensures that each number is only printed once
6. `> refs.txt` prints the output to a file called refs.txt.