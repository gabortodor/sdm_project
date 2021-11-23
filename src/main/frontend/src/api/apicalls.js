import React from "react";
import axios from "axios";

export const userLogin = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/auth/login`,
        'data': request
    });
}

export const userLogout = () => {
    return axios({
        'method': 'GET',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/logout`,
    });
}


export const userRegister = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/register`,
        'data': request
    });
}

export const fetchUserData = (request) => {
    return axios({
        'method': 'GET',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/userinfo`,
        'headers': {
            'Authorization': 'Bearer' + request
        }
    });
}

export const searchMovie = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/search`,
        'data': request
    });
}

export const loadMovie = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/movie`,
        'data': request
    });
}

export const loadCredits= (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/credits`,
        'data': request
    });
}

export const loadImages = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/images`,
        'data': request
    });
}

export const loadRecommendations = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/recommendations`,
        'data': request
    });
}

export const loadVideos = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/videos`,
        'data': request
    });
}

export const reset = (request) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8082'}/api/reset`,
        'data': request
    });
}