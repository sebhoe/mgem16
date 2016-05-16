export class PlayersService {
    getPlayers() {
        return [
            { id: 1, name: "Manuel Neuer", isFavorite: true},
            { id: 3, name: "Mats Hummels", isFavorite: false},
            { id: 7, name: "Toni Kroos", isFavorite: false},
            { id: 11, name: "Thomas Müller", isFavorite: true},
            { id: 13, name: "Mario Gomez", isFavorite: false}
            ]
    }
}