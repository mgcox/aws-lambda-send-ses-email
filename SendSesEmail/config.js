"use strict";

var config = {
    "templateBucket" : "tagdemailtemplates",
    "templateKey" : "Templates/Template.html",
    "targetAddress" : "{{toemail}}",
    "fromAddress": "Me <test@tagdsocial.com>",
    "defaultSubject" : "Email From {{name}}"
}

module.exports = config
