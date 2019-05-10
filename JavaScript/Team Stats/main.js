const team = {
    _players: [{
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 34
    },
    {
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 31
    },
    {
        firstName: 'Sergio',
        lastName: 'Aguero',
        age: 30
    }],
    _games: [{
        opponent: 'Manchester City',
        teamPoints: 22,
        opponentPoints: 44
    },
    {
        opponent: 'Juventus',
        teamPoints: 43,
        opponentPoints: 14
    },
    {
        opponent: 'Arsenal',
        teamPoints: 42,
        opponentPoints: 27
    }],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age,
        }
        this._players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints,
        }
        this._games.push(game)
    }
}
// Testing adding new players to the team.
console.log(team._players)
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
console.log(team._players)

// Testing adding new games to the team.
console.log(team._games)
team.addGame('Liverpool', 31, 42)
team.addGame('Chelsea', 25, 14)
team.addGame('Real Madryt', 52, 53)
console.log(team._games)