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
