import requests

# Base URL and parameters
base_url = "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/1632826924"
team_id = 5
views = [
    "mDraftDetail",
    "mLiveScoring",
    "mMatchupScore",
    "mPendingTransactions",
    "mPositionalRatings",
    "mRoster",
    "mSettings",
    "mTeam",
    "modular",
    "mNav"
]

# Loop through each view and make the request
for view in views:
    params = {
        "rosterForTeamId": team_id,
        "view": view
    }
    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        # Write the output to a JSON file
        with open(f"{view}.json", "w") as file:
            file.write(response.text)
        print(f"Data for view '{view}' written to {view}.json")
    else:
        print(f"Failed to fetch data for view '{view}'. Status code: {response.status_code}")
