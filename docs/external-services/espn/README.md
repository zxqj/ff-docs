# API
## Known endpoints
### League

url: `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/{season}/segments/0/leagues/{leagueId}`

regular parameters: rosterForTeamId

possible values: integer team_id where 1 < team_id < $leagueSize

matrix parameters: view

known possibe values:
    * mDraftDetail
    * mLiveScoring
    * mPositionalRatings
    * mPendingTransactions
    * mRoster
    * mSettings
    * mTeam
    * modular
    * mNav

Example:

    https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/1632826924?rosterForTeamId=5&view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mRoster&view=mSettings&view=mTeam&view=modular&view=mNav