'use strict'
require('dotenv').config();
const superagent = require('superagent');
const User = require('../models/users.js');

const tokenServerUrl = 'https://public-api.wordpress.com/oauth2/token';//https:­//p­ubl­ic-­api.wo­rdp­res­s.c­om/­oau­th2­/token
const remoteAPI = 'https://public-api.wordpress.com/rest/v1/me';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

module.exports = async (req, res, next) => {
    try {
        console.log('in try')
        const code = req.query.code;
        console.log('code',code);
        const remoteToken = await exchangeCodeForToken(code);
        console.log('remoteToken',remoteToken);
        const remoteUser = await getRemoteUserInfo(remoteToken);
        const [user, token] = await getUser(remoteUser,remoteToken);
        console.log('after save to db', user, token);

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.send(error);
    }
}

async function exchangeCodeForToken(code) {
    console.log(code)
    const data = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code: code,
        grant_type: 'authorization_code'
    }
    console.log(data);
        const tokenResponse = await superagent.post(tokenServerUrl).set('Content-Type', 'application/x-www-form-urlencoded').send(data);
    const accessToken = tokenResponse.body.access_token;
    return accessToken;


}

async function getRemoteUserInfo(token) {
    const userResponse = await superagent.get(remoteAPI)
        .set('Authorization', `bearer ${token}`)
        .set('user-agent', 'express-app');

    const user = userResponse.body;
    console.log('user info provided by github', user);
    return user;
}

async function getUser(remoteUser,rr) {
    const user = {
        username: remoteUser.username,
        password: rr,
    };

    const userObj = new User(user);
    const userDoc = await userObj.save();

    const token = userDoc.token;
    return [user, token];
}
