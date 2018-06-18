
## Feature branches

| Feature Branch         | May branch off from   | Must merge back into  |
| ---------------------: |:--------------------- | --------------------- |
| 155803215-feature      | develop               | develop               |

`155803215-feature` is an example of a branch name


May branch off from:

`develop`

Must merge back into:

`develop`

Branch naming convention:
`anything except master, develop, release-*, or hotfix-*`

#### The purpose of a feature branch
Feature branches are used to develop new features for the upcoming or a distant future release.
When starting development of a feature, the target release for the feature may be unknown at its creation time.
The purpose of a feature branch is that it exists as long as the feature is in development, but will eventually be merged back into develop to add the new feature to the upcoming release.
The feature branch could also be discarded in case of the failure of an experiment.
Feature branches typically exist in developer repos only, not in origin.
Since this is not practiced today, this is a part of the paradigm that team will need to adjust to.

fb@2x.png

#### Creating a feature branch
When starting work on a new feature, branch off from the develop branch.
```
$ git checkout -b <feature-branch-convention> develop
Switched to a new branch <feature-branch-convention>
```

#### Feature Branch Convention
`<STORYID-TYPE-SHORT_STATEMENT>`
