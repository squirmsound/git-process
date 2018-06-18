## Supporting branches
Analogous to the main branches `master` and `develop`, our development should use a variety of supporting branches to act as support for the following business use cases.

- Parallel development between team members
- Ease tracking of features
- Prepare for production releases and to assist in quickly fixing live production problems.
- Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we use are:

- `Feature`
- `Release`
- `Hotfix`

Each of these branches have a specific purpose that are bound to strict rules. These rules establish which branches may be their *origin* branch and which branches must be their *merge targets*.

The branch types are categorized by how we use them and are not “special” from a technical perspective.
