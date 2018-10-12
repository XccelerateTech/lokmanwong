//1

var players = [
	{name: "Lionel Messi", club: "FC Barcelona" },
	{name: "Christiano Ronaldo", club: "Real Madrid" },
	{name: "Luis Surarez", club: "FC Barcelona" },
	{name: "Gareth Bale", club: "Read Madrid" },
	{name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var result = players.filter(function(players) {
    return players.club === 'FC Barcelona';
});

result

//2

var justName = players.map(function(players) {
    return players.name;
});
justName