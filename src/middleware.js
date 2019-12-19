'use strict';

let smooch = function (options) {
    let smoochOptObj    = {
        200:function (message,customMessage) {

            message.success = {
                code:200,
            };
            customMessage?message.success.message = customMessage:message.success.message = "The request has succeeded";

        },
        201:function (message,customMessage) {
            message.success = {
                code:201,
            };
            customMessage?message.success.message = customMessage:message.success.message = "The request has succeeded and a new resource has been created as a result. ";

        },
        202:function (message,customMessage) {
            message.success = {
                code:202,
            };
            customMessage?message.success.message = customMessage:message.success.message = "The request has been received but not yet acted upon";
        },
        203:function (message,customMessage) {
            message.success = {
                code:203,
            };
            customMessage?message.success.message = customMessage:message.success.message = "The returned meta-information is not exactly the same as is available from the origin server";

        },
        204:function (message,customMessage) {
            message.success = {
                code:204,
            };
            customMessage?message.success.message = customMessage:message.success.message = "There is no content to send for this request, but the headers may be useful";
        },
        205:function (message,customMessage) {
            message.success = {
                code:205,
            };
            customMessage?message.success.message = customMessage:message.success.message = "Reset the document which sent this request";

        },
        206:function (message,customMessage) {
            message.success = {
                code:206,
            };
            customMessage?message.success.message = customMessage:message.success.message = " Range header is sent from the client to request only part of a resource."

        },
        300:function (message,{newUrl,customMessage,otherUrls}) {
            if (!Array.isArray(otherUrls)){
                throw new Error('Provide an array of possible uris for the request');
            }
            message.redirect = {
                code:300,
                links:otherUrls,
            };
            customMessage?message.redirect.message = customMessage:message.redirect.message = "Multiple Choice";
        },
        301:function (message,{newUrl,customMessage}) {
            if (!newUrl){
                throw new Error('The new uri for this resource was not given');
            }
            message.redirect = {
                code:301,
            };
            customMessage?message.redirect.message = customMessage:message.redirect.message = "The URL of the requested resource has been changed permanently. "

        },
        302:function (message,{newUrl,customMessage}) {
            message.redirect = {
                code:302,
            };
            customMessage?message.redirect.message = customMessage:message.redirect.message = "The URI of requested resource has been changed temporarily. ";
        },
        303:function (message,{newUrl,customMessage}) {
            if (!newUrl){
                throw new Error('The redirect uri for this resource was not given');
            }
            message.redirect = {
                code:303,
                uri:newUrl,
            };
            customMessage?message.redirect.message = customMessage:message.redirect.message = " Get the requested resource at another URI with a GET request.";

        },
        304:function (message,{newUrl,customMessage}) {
            message.redirect = {
                code:304,
            };
            customMessage?message.redirect.message = customMessage:message.redirect.message = "The response has not been modified.";

        },
        307:function (message,{newUrl,customMessage}) {
            message.success = {
                code:307,
                message:" Temporary Redirect"
            };
            customMessage?message.redirect.message = customMessage:'';
        },
        308:function (message,{newUrl,req,customMessage}) {
            if (!newUrl){
                throw new Error('The redirect uri was not given');
            }
            req.location(newUrl);
            message.success = {
                code:307,
                message:" Temporary Redirect"
            };
            customMessage?message.redirect.message = customMessage:'';

        },
        400:function (message,customMessage) {
            message.error = {
                code:400
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The server could not understand the request due to invalid syntax.";
        },
        403:function (message,customMessage) {
            message.error = {
                code:400
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "Access Denied";
        },
        404:function (message,customMessage) {
            message.error = {
                code:404
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "Resource not found.";
        },
        405:function (message,customMessage) {
            message.error = {
                code:405
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "Method Not Allowed.";
        },
        406:function (message,customMessage) {
            message.error = {
                code:406
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "Not Acceptable.";
        },
        408:function (message,customMessage) {
            message.error = {
                code:408
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The server did not receive a complete request message within the time that it was prepared to wait.";
        },
        409:function (message,customMessage) {
            message.error = {
                code:409
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The request could not be completed due to a conflict with the current state of the target resource.";
        },
        410:function (message,customMessage) {
            message.error = {
                code:410
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The requested content has been permanently deleted from server, with no forwarding address. ";
        },
        411:function (message,customMessage) {
            message.error = {
                code:411
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The Content-Length header field is not defined and the server requires it.";
        },
        412:function (message,customMessage) {
            message.error = {
                code:412
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The server does not meet the preconditions in your headers.";
        },
        413:function (message,customMessage) {
            message.error = {
                code:413
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "Request entity is larger than limits defined by server";
        },
        414:function (message,customMessage) {
            message.error = {
                code:414
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The URI requested by the client is longer than the server is willing to interpret.";
        },
        415:function (message,customMessage) {
            message.error = {
                code:415
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The media format of the requested data is not supported by the server.";
        },
        416:function (message,customMessage) {
            message.error = {
                code:416
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.";
        },
        417:function (message,customMessage) {
            message.error = {
                code:417
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The expectation indicated by the Expect request header field can't be met by the server.";
        },
        418:function (message,customMessage) {
            message.error = {
                code:418
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The expectation indicated by the Expect request header field can't be met by the server.";
        },
        422:function (message,customMessage) {
            message.error = {
                code:422
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The request was well-formed but was unable to be followed due to semantic errors.";
        },
        425:function (message,customMessage) {
            message.error = {
                code:425
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The server is unwilling to risk processing a request that might be replayed.";
        },
        426:function (message,customMessage) {
            message.error = {
                code:426
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.";
        },
        428:function (message,customMessage) {
            message.error = {
                code:428
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The  server requires the request to be conditional.";
        },
        429:function (message,customMessage) {
            message.error = {
                code:429
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "You have sent too many requests.";
        },
        431:function (message,customMessage) {
            message.error = {
                code:431
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The server is unwilling to process the request because its header fields are too large.";
        },
        451:function (message,customMessage) {
            message.error = {
                code:451
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:message.error.message = "The user-agent requested a resource that cannot legally be provided.";
        },
        500:function (message,customMessage) {
            message.error = {
                code:500,
                message:"The server has encountered a situation it doesn't know how to handle."
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';
        },
        501:function  (message,customMessage) {
            message.error = {
                code:501,
                message:"The request method is not supported by the server and cannot be handled."
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';
        },
        502:function (message,customMessage) {
            message.error = {
                code:502,
                message:"The request method is not supported by the server and cannot be handled."
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';
        },
        503:function (message,customMessage) {
            message.error = {
                code:503,
                message:"The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. "
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';
        },
        504:function (message,customMessage) {
            message.error = {
                code:504,
                message:"This error response is given when the server is acting as a gateway and cannot get a response in time."
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';

        },
        505:function (message,customMessage) {
            message.error = {
                code:505,
                message:"The HTTP version used in the request is not supported by the server."
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';
        },
        506:function (message,customMessage) {
            message.error = {
                code:506,
                message:"The server has an internal configuration error."
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';

        },
        507:function (message,customMessage){
            message.error = {
                code:507,
                message:"The server has an internal configuration error."
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';

        },
        511:function (message,customMessage){
            message.error = {
                code:502,
                message:"Authentication needed to gain network access. "
            };
            //Ability to take in custom messages
            customMessage?message.error.message = customMessage:'';

        }
    };

    let smoochOptions   = Object.assign((options||{}), smoochOptObj);

    return function (req,res,next) {
        let message =   {};
        //just a hack
        !req.query.q?req.query.q=null:"";

        let smoochObj = {
            withClientError:function (errorCode,errorMessage) {
                try{
                    if (errorCode >= 400 && errorCode <= 499){

                        smoochOptions[errorCode](message,errorMessage);
                    }else {
                        throw 'Not a client error code';
                    }
                }catch (e) {
                    throw new Error('Method does not exist');
                }
                return this;
            },

            withServerError:function (errorCode,errorMessage) {
                try{
                    if (errorCode >= 500 && errorCode <= 599){

                        smoochOptions[errorCode](message,errorMessage);
                    }else {
                        throw 'Not a client error code';
                    }
                }catch (e) {
                    throw new Error('Method does not exist');
                }
                return this;
            },

            withSuccess:function (code,customMessage) {
                try{
                    if (code >= 200 && code <= 599){

                        smoochOptions[code](message,customMessage);
                    }else {
                        throw new Error('Not a success code');
                    }
                }catch (e) {
                    throw new Error('Method does not exist');
                }
                return this;
            },

            withRedirect:function (code,{newUrl,customMessage,}) {
                try{
                    if (code >= 300 && code <= 399){

                        smoochOptions[code](message,{newUrl,customMessage,req});
                    }else {
                        throw new Error('Not a redirect code');
                    }
                }catch (e) {
                    throw new Error('Method does not exist');
                }
                return this;
            },

            withData:function (data) {
                if(message.success.code !== 204){

                    message.success.data = data;
                }else{
                    throw new Error('This status doesn\'t allow you to send with this status code')
                }
                return this;
            },
            withErrorData:function (data) {
                message.error.data = data;
                return this;
            },

            // withPagination: function(){
            //
            //
            //     if (message.success.data){
            //
            //
            //         // Protect your data at all cost
            //         let lastId = null;
            //         try{
            //             lastId      = message.success.data[message.success.data.length - 1].id;
            //
            //         }catch (e) {
            //             console.log(e);
            //         }
            //
            //
            //         let payLoad       = {data:lastId};
            //         let newToken;
            //
            //         //Implement JWT
            //         var privateKey = fs.readFileSync('jwt_pk.key','utf8');
            //
            //         return new Promise((resolve,reject)=>{
            //
            //             jwt.sign(payLoad,privateKey, { expiresIn: '2h',algorithm: 'RS256' },   (err,code)=> {
            //
            //                 if (err){
            //
            //                     reject(err)
            //                 }else{
            //
            //                     newToken = code;
            //                     message.success.pagination = {
            //                         prevPageToken : req.query.pagination?req.query.pagination.nextPageToken:undefined,
            //                         nextPageToken : newToken
            //                     };
            //                     resolve(this);
            //                 }
            //             });
            //
            //         });
            //
            //     }
            // },
            reply:function (callback) {

             res.status(message.success.code||message.redirect.code||message.error.code).json(message);
                callback();
                return;
            }

        };



        // let paginationHelper = {
        //     paginate:  function (colomn) {
        //
        //
        //         let payload =  jwtVerifier(req.query.paginationToken)||null;
        //         if (payload) {
        //             let x = req.query.q = {
        //                 [colomn||'id']:{
        //                     [Op.gt]: payload.data
        //                 }
        //             }
        //
        //
        //         }
        //     }
        // };
        Object.assign(res,smoochObj);
        Object.assign(req,paginationHelper);


        next();
    }
}

module.exports = smooch;