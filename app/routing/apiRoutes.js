let express = require("express");
let bodyParser = require("body-parser");
let data = require("../data/friend");
let util = require("util");

let app = express();

let friendsArray = [];
module.exports = {
  routing: function(app) {
    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    app.use(bodyParser.json());

    app.get("/api/friends", (req, res) => {
      res.send(bestFriend);
    });

    app.post("/api/friends", (req, res) => {
      let userAnswer = req.body;
      console.log(
        "this is the req body" + util.inspect(userAnswer, false, null, true)
      );

      let personObject = {
        name: userAnswer.name,
        image: userAnswer.image,
        scores: userAnswer.scores
      };
      let bestFriend;
      let bestFriendDiff;
      [bestFriend, bestFriendDiff] = whosYourFriend(
        personObject,
        data.friendsArray
      );
      data.friendsArray.push(personObject);
      res.json(bestFriend);

      console.log(personObject.scores);
    });
  }
};

function whosYourFriend(
  you,
  friendsArray,
  bestFriendDiff = 1000,
  bestFriend = {}
) {
  friendsArray.forEach(friend => {
    console.log(`this is the friend ${friend.name}`);
    let totalDiff = 0;
    friend.scores.forEach((score, index) => {
      totalDiff += Math.abs(score - you.scores[index]);
    });
    console.log(`check this out ${totalDiff}`);
    console.log(`this is bestfriend diff ${bestFriendDiff}`);
    if (totalDiff < bestFriendDiff) {
      bestFriend = friend;
      bestFriendDiff = totalDiff;
      console.log(`this is the best friend ${bestFriend}`);
      console.log(`after change ${bestFriendDiff}`);
    }
  });
  return [bestFriend, bestFriendDiff];
}
