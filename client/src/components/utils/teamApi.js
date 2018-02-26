const API = "https://juega-bonito-api.herokuapp.com/api/v1/"

class GameApi {

  static postGame(values, uid) {
    const params = values['uid'] = uid
    return fetch(API + `games`, {
      method: 'POST',
      headers:
      { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: values})
    }).then(response => response.json())
      .then(res => console.log(res))
  };

  static getUserGames(uid) {
    return fetch(API + "players/" + uid)
    .then((response) => response.json())
  }

  static getAllGames() {
    return fetch(API + "games")
    .then((response) => response.json())
  }

}

module.exports = GameApi
