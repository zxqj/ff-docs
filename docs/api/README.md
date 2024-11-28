This is the directory for the `ferret` graphql API.  It is defined in `./schema.gql`.  Some notes on type naming:

# Name Overloading

* `Game` = NFL game, `Match` = fantasy matchup
* `Player` = NFL player
* `NflTeam` = NFL team, `Team` = fantasy team


There is a problem of name overloading that comes up when your data consists of fantasy leagues with teams, players, games, etc., and necessarily also a real-life football league with the same entities.  It is confounded by the fact that GraphQL doesn't support namespaces (in the TypeScript sense).  In naming types, the following was kept in mind.

* Natural language usage was the primary determining factor.  In most cases, this makes naming decisions pretty clear.  However, when in doubt, I aired on the side of using more explicit language the refer to real-life entities, as the application is more closely connected to the fantasy league than to the NFL.

* The word "player," at least in my experience, is not used *as* often to refer to the real-life human beings managing fantasy teams.  The word "team," however, is used all of the time in the same context to refer to the .. teams they manage.  Even the phrase "fantasy player" is most readily interpreted as an NFL player's representation in the fantasy context, not the fantasy team manager.

* The word "game" is used to refer to NFL games, and "match" to refer to the competitive events in fantasy.

* "League" = fantasy league
* The NFL is so referred to.