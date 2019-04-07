var savedFriends = require("../data/friends");

module.exports = function (app) {
    // routes to get api results
        // path.get("/api/friends")
        // used to display JSON of all friends
    app.get("/api/friends", function (req, res) {
        return res.json(savedFriends);
    });


    // path.post("/api/friends")
    // handle incoming survey results results, this will be used to handle the compatibility logic
    app.post("/api/friends", function (req, res) {
        
        // object ready for the friend match
        var friendMatch = {
            name: "",
            photo: "",
            matchScore: 100  
        };
        
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;

        var totalDifference = 0;

        // compatibility
        // compare the user's answers to each of of the savedFriends, answer for answer and add up the difference 
        for(var i = 0; i < savedFriends.length; i++){

            totalDifference = 0;

            for(var j = 0; j < savedFriends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(newFriendScores[j]) - parseInt(savedFriends[i].scores[j]));

                if(totalDifference < friendMatch.matchScore){
                    // populate the match object
                    friendMatch.name = savedFriends[i].name;
                    friendMatch.photo = savedFriends[i].photo;
                    friendMatch.matchScore = totalDifference;
                }
            }
        }

        // add new person to the bank of available friends
        savedFriends.push(newFriend);
        // send friendMatch
        res.json(friendMatch);
    });

};

