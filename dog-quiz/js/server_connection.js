"use strict"

const prefix = "https://teaching.maumt.se/apis/access/";

async function fetchFunction(request) {

    try {

        const serverResponse = await fetch(request);
        const resource = await serverResponse.json();
        return { response: serverResponse, resource: resource };

    } catch (e) {

        console.log(e);
        loadingPage.setAttribute("id", "display_flex");
        closeButton.setAttribute("id", "display_block");
        feedbackAnswer.textContent = "NetworkError! Please try again."

    };
};

