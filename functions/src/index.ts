import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

import * as mqtt from 'mqtt';
admin.initializeApp()

export const FIREBASE_AUTH_EMULATOR_HOST="localhost:9099";
export const FIREBASE_DATABASE_EMULATOR_HOST="localhost:9000";
export const FIRESTORE_EMULATOR_HOST="localhost:8080"

export const sixtySecondCron = functions.pubsub.schedule('every 1 minutes').onRun(_ => {
  // console.log('running cron with context', context)

  const client = mqtt.connect('mqtt://test.mosquitto.org')

  client.on('connect', () => {
    // console.log('CONNECTED');
    client.subscribe('furballtest', err => {
      if(!err){
        // client.publish('furballtest', '{"name": "cron starting indicator", "fun": "The cron job just ran and published this after subscribing to the same topic"}')
        setTimeout(() => {
          console.log('60003 ms passed. Closing client.')
          // client.unsubscribe('furballtest')
          client.end();
        }, 60003)
      }
    })
  })

  client.on('message', (topic, payload, packet) => {
    const message = JSON.parse(payload.toString())
    console.log({topic, message, packet})
    admin.database().ref('testFur').push({topic, ...message})
  })
  return null;
})
