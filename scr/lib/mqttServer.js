const mqtt=require('mqtt');
const host='broker.emqx.io'
const port='1883'
exports.mq=(form)=>{
const clientID=`mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl=`mqtt://${host}:${port}`
const client=mqtt.connect(connectUrl,{

    clientID,
    clean:true,
    connectTimeout:4000,
    username:'emqx',
    password:'public',
    reconnectPeriod:1000,
})

const topic='node/mqtt/status/temper'
client.on('connect', ()=>{
    console.log("MQTT Connected");

client.subscribe([topic], ()=>{

    console.log(`Subscribe to topic' ${topic}`)
    client.publish(topic, form , {
        qos:0, retain:false
    },(Error)=>{
        if(Error){
            console.error(Error);
        }
    });

});

    console.log(connectUrl)
    
});
    client.on('message', (topic, value) => {
    console.log('Received Message:', topic, value.toString())
    console.log(MessageChannel);
  })
}













