const db = require('../models');
const Tutorial = db.tutorials;
const Comment = db.comments;

exports.create = (data) => {
    return Tutorial.create({
        title: data.title,
        description: data.description,
    })
    .then((tutorial) => {
        console.log("Created tutorial: " + JSON.stringify(tutorial, null, 4));
        return tutorial;
    })
    .catch((err) => {
        console.log("Error while creating tutorial: ", err);
    });
}

exports.createComment = (tutorialId, data) => {
    return Comment.create({
        name: data.name,
        text: data.text,
        tutorialId: tutorialId,
    })
    .then((data) => {
        console.log("Created comment: " + JSON.stringify(data, null, 4));
        return data;
    })
    .catch((err) => {
        console.log("Error while creating comment: ", err);
    });
};
exports.findTutorialById = (tutorialId) => {
    return Tutorial.findByPk(tutorialId, { include: ["comments"] })
    .then((data) => {
        return data;
    })
    .catch((err) => {
        console.log("Error while finding tutorial: ", err);
    });
};
exports.findCommentById = (commentId) => {
    return Comment.findByPk(commentId, { include: ["tutorial"] })
    .then((data) => {
        return data;
    })
    .catch((err) => {
        console.log(">> Error while finding comment: ", err);
    });
};