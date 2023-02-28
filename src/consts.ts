export const PORT = process.env.PORT || 3000
export const MAX_RANGE_NUMBER = 56
export const MIN_RANGE_NUMBER = 2

export const playerState = {
    WAITING: -1,
    firstPlayer: 0,
    secondPlayer: 1,
}

export const emitEvents = {
    GAME: 'game',
    INFO: 'info',
    WAITING: 'waiting',
    PLAYERNUMBER: 'playerNumber',
}

export const clientMessages = {
    WAITING: 'We need other player to join...',
    BLOCKED: 'Another game is running',
    GAMEWAITING: '...',
}