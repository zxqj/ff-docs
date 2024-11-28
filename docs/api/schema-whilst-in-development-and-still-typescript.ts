namespace Nfl {

    type League = {
        name: string;
        avatar: Blob;
    };

    type TeamId = string;

    export type Team = {
        name: string;
        id: TeamId;
        city: string;
        state: string;
    };

    type InjuryStatus = "PUP" | "OUT" | "Q" | "IR";

    export type Player = {
        id: number;
        firstName: string;
        lastName: string;
        injuryStatus: InjuryStatus;
        teamId: TeamId;
        fantasyTeamId: number;
    };

    type PlayerPosition = 
        | "QB"
        | "WR"
        | "TE"
        | "RB"
        | "OT"
        | "DL"
        | "DB"
        | "S"
        | "CB"
        | "K";

    type Game = {
        game_id: number;
        total_line: number;
        spread_line: number;
        season: number;
        home_team: TeamId;
        away_team: TeamId;
        home_score: number;
        away_score: number;
        week: number;
    };

    type GameState = {
        clockTime: string;
        yardLine: [TeamId, number];
        down: 1 | 2 | 3 | 4;
        quarter: 1 | 2 | 3 | 4 | "OT";
        possessionTeam: TeamId;
    };

    export type GamePlaySegment = {
        start_time: string;
        safety: number;
        touchdown: number;
        field_goal: number;
        two_point_conversion: number;
        yards: number;
        sack: number;
        pass_yards: number;
        pass_attempt: number;
        first_down_pass: number;
        complete_pass: number;
        rushing_yards: number;
        rush_attempt: number;
        rush_touchdown: number;
        first_down_rush: number;
        receiving_yards: number;
        yards_after_catch: number;
        yards_gained: number;
        air_yards: number;
        return_yards: number;
        return_touchdown: number;
        fumble: number;
        fumble_forced: number;
        fumble_lost: number;
        penalties: Penalty[];
        interception: number;
    };

    type Penalty = {
        player_id: number;
        penalty_type: string;
        yards: number;
    };

    type Play = {
        data: GamePlaySegment;
        gameId: number;
    };

}

namespace Ferret {
    export type User = {
        id: number;
        leagues: FantasySports.LeagueUser[];
    };
}

namespace FantasySports {

    type PlayerProjection = {
        id: number;
        playUnit: "game" | "all_remaining_games" | "season";
        projection: Nfl.GamePlaySegment;
    };

    enum LeagueHostId {
        ESPN,
        Yahoo,
        Sleeper,
        NFL
    }

    enum LeagueStatus {
        PreDraft,
        InSeason
    }

    enum RosterPosition {
        QB,
        RB,
        WR,
        FLEX_WR,
        FLEX_WT,
        FLEX_WRT,
        FLEX_QWRT,
        K,
        FLEX_IDP,
        DEF,
        DL,
        LB,
        DB,
        Bench,
        IR
    }

    type RosterConfiguration = {
        benchSize: number;
        positionLimits: {
            [key in RosterPosition]?: number;
        };
    };

    type ScoringConfiguration = {
        // Define scoring configuration fields here
    };

    type LeagueConfiguration = {
        scoring: ScoringConfiguration;
        roster: RosterConfiguration;
        schedule: {
            trade_deadline: string;
        };
    };

    type League = {
        name: string;
        config: LeagueConfiguration;
        status: LeagueStatus;
        last_message_time: string;
        avatar: Blob;
        teams: Nfl.Team[];
        transactions: Transaction[];
    };

    type LeagueUser = {
        id: ID;
        name: String;
        league: League;
        team: Team;
    }

    type Team = {
        name: string;
        avatar: Blob;
        wins: number;
        losses: number;
        fpts_total: number;
        fpts_against_total: number;
        starters: number[];
        players: number[];
    };

    type DraftPick = {
        season: string;
        round: number;
        team: string;
    };

    type OneTeamTransactionType = "WaiverClaim" | "Add" | "Drop";

    type Transaction = OneTeamTransaction | Trade;

    type OneTeamTransaction = {
        type: OneTeamTransactionType;
        teamId: number;
        playerId: number;
    };

    type Tradeable = DraftPick | Nfl.Player | WaiverBudgetPayment;

    type Trade = {
        processedTime: number;
        itemsReceived: {
            [teamId: number]: Tradeable;
        };
    };

    type WaiverBudgetPayment = {
        // Define waiver budget payment fields here
    };

}