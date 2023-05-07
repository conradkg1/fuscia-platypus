const ProfileGenerator = require("./lib/ProfileGenerator");
const renderHTML = require("./src/basetemplate");

const teamProfileGenerator = new ProfileGenerator(renderHTML);

teamProfileGenerator.init();