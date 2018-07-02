## The Main Branches
At the core, the development model is greatly inspired by existing models out there. The central repo holds two main branches with an infinite lifetime:

- `master` at origin(should be familiar to every Git user)
- `develop` is parallel to the master branch.


We consider  `origin/master` to be the main branch where the source code of *HEAD* always reflects a "production-ready" state.

![Main Branches](https://i.imgur.com/Z6K1uRw.png)

We consider `origin/develop` to be the main branch where the source code of *HEAD* always reflects a state with the latest delivered development changes for the next release.

Some would call this the “integration branch”. This is where any automatic nightly builds are built from.

When the source code in the develop branch reaches a stable point and is ready to be released, all of the changes should be merged back into master somehow and then tagged with a release number.

How this is done in detail will be discussed further on.

Therefore, each time when changes are merged back into master, this is a new production release by definition.

Some would call this the `release candidate`

We have to be very strict with this, so that theoretically, our pipeline scripts will automatically build and roll-out our software to our production servers every time there was a commit on master.
