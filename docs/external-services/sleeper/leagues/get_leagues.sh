#! /bin/bash
id=$(../user/get_user.sh | jq '.user_id')
curl https://api.sleeper.app/v1/user/628354627166896128/leagues/nfl/2024 | jq
