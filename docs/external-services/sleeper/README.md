# Sleeper

Sleeper has a public API, which apparently has changed quite a bit over the past few years.  It requires no authentication and is all HTTP GET requests and JSON responses.  I will document some of it here as I write code against it/find functions that are useful.  It is pretty well documented, but there are some notable absences.  Several people have written API wrappers around it; I'm doubting those would save very much time.

But the frontend uses some additional APIs they have which are not public. 
## Public API
This is the URL listed on their website

*Base URL* - `https://api.sleeper.app/<version=v1>/`

### Users (and Avatars)
The api website actually does not show all of the fields

### Leagues
1. Get User Leagues `/user/<user_id>/leagues/<sport=nfl>/<season=2017,2017,...>`
2. Get League `/league/<league_id>`
3. Get League Rosters `/league/<league_id>/rosters`
4. Get League Users
5. Get matchups
6. Get playoff bracket
7. Get transactions
8. Get Traded picks
9. Get NFL State
### Drafts
### Players