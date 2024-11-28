#! /bin/bash
curl https://api.sleeper.com/projections/nfl/2024/14?season_type=regular&position[]=DEF&position[]=K&position[]=QB&position[]=RB&position[]=TE&position[]=WR&order_by=pts_ppr -o > projections.json
