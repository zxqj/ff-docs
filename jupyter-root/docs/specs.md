# Implement a UI for importing leagues

1. just select platform and username (and authenticate if necessary), and it imports everything you want
1. every football team in an ongoing fantasy season
1. if no team in an ongoing fantasy season, for now, we just report no active leagues
1. import leagues with progress indicator if necessary
1. store league in db (if it is not already there) with 1-1 mapping between platform+platformid and league
1. if it is not the case that the platform/user pair has been seen before AND a user providing them associated that pair with a username, go to 6. otherwise, load the most recently-associated username and ask if they're that user and would like to load their previous configuration. if no, go to 6.
6. generate a unique id to store in browser cookies  

* import league request
    * 