'use strict';

const Alexa = require('alexa-sdk');
var api = require('./jenkinsRESTHandler.js');
var request = require('sync-request');

const APP_ID = "amzn1.ask.skill.0afa38e5-8ae4-452f-9a01-ed077f3a7920"; 

const handlers = {
    'LaunchRequest': function () {
        this.emit('Jobstatus');
    },
    'GetNewFactIntent': function () {
        this.emit('Jobstatus');
    },
    'Jobstatus': function () {
        var jobName = this.event.request.intent.slots.Job;
        var fuzzyJobName = jobName.value.toLowerCase();
        /* 
            Use sync-request because we need a response in sync. 
            Lambda will control time outs (currently 7s)
        */
        var raw = request('GET', 'https://builds.apache.org/job/' + fuzzyJobName + '/api/json');
        var data = JSON.parse(raw.getBody('utf8'));
        
        this.emit(':tell', data.healthReport[0].description);
    },
    'Jobinfolderstatus': function () {},
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};

