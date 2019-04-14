let express = require("express");
let bodyParser = require("body-parser");
let data = require("../data/friend");

let app = express();

let friendsArray = [];
module.exports = {
  routing: function(app) {
    app.use(bodyParser.json());

    app.get("/api/friends", (req, res) => {
      res.send(friendsArray);
    });

    app.post("/api/friends", (req, res) => {
      let userAnswer = req.body;
      let numberArray = [];
      console.log(userAnswer);
      for (let prop in userAnswer[0]) {
        if (prop.includes("question")) {
          numberArray.push(userAnswer[0][prop]);
        }
      }
      let personObject = {
        name: userAnswer[0].name,
        image: userAnswer[0].image,
        scores: numberArray
      };
      console.log(numberArray);
      let bestFriend = {};
      let bestFriendDiff = 1000;
      whosYourFriend(personObject, friendsArray, bestFriendDiff);
      friendsArray.push(personObject);
      console.log(friendsArray);
      console.log(personObject);
      console.log(bestFriend);
      console.log(bestFriendDiff);
    });

    friendsArray: friendsArray;
  }
};

function whosYourFriend(you, friendsArray, bestFriendDiff) {
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
      return bestFriend;
    }
  });
}
