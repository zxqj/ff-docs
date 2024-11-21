 ## Player
 We want to have a page that conveys a lot of information about a player at one
 time, including
 
* how that player's projections have been trending over the last week
* their performance history
    * raw performance metrics
    * fantasy points, using league settings
* context for past performances - Look into timeline UIs  
    * their injuries (obviously)
    * teammates' injuries
    * team roster changes
    * strength of matchups
* performance projections
    * stats projections
    * ScoringConfig (stats projections) -> fantasy projections
* context for future
    * returning teammates
    * strength of matchups

## NFL Teams
* fantasy points and stats allowed - to position - drill down into wide receiver types
* fantasy points and stats allowed - to play type - short/long pass, qb rush
* fantasy points and stats allowed - to (passing, rushing, receiving)
* defensive roster changes

## League Teams
* 2-Team Comparison of current players' past performance
* 2-Team Comparison of current players' projected performance
* Able to change ranking measure for each of listed UIs
    * ranking measures
        * (past/projected performance) by (points/stats)
        * projected performance add'l inputs
            * can use raw-rankings projections for standard-scoring (PPR/HALF/STD), as there 
            are *a lot* more opinions available than with stats projections
            * next week/ROS
    * UIs
        * "all-players-ranked roster-highlighted UI"
        * "Matchup" UI with players' values next to them, and totals at op
            * some sort of summary comparison

## Use-Case Driven UIs
Under "player" above, was somewhat driven by wanting a draft UI, so there may be some overlap

### Mid-Season Draft Tool


### Trade tool
Could be integrated into League Team - Matchup UI.  We want to compare selected measure over 
whole team with each set of players.

**Finder**
Search league for trade that would optimize some user-specified objective function $f(X)$ and satisfy a set of user-specified constraints $g_1(X), ..., g_n(X) >= 0$.  We could define the feasible set in multiple ways, but for the moment let $X$ be some numeric matrix representation of both teams' before and after states.  (Obviously, the UI will enable the user to specify these in a more intuitive way.  No mathematical optimization experience required.)  For example
* "equally mutually advantageous"
    * $f(X) = trade_gain(team_1) + trade_gain(team_2)$
    * $g_1(x) = |trade_gain(team_1) - trade_gain(team_2)| < c$, 
    * where $trade_gain(t) = projected_ros_fantasy_points(t_{after_trade}) - projected_ros_fantasy_points(t_{prior_trade})$

We'll have to show the above defined optimization problem can be solved or approximated to some degree of tolerance reasonably efficiently.  On second thought, it might be best to think of the criteria/constraints ourselves and give the user a set of
pre-defined options.  Or just present the trades we find using our hard-coded optimization problems to the user.  I do think an easy-to-understand (potentially simplified) explanation of what was optimized would be very beneficial.
    
    projected-fpoints-ROS(team 1 after trade) - projected-points-ROS(team 1 after trade)


**Retrospective**