// Wrapper around Pub-Nub, see pubnub.4.27.4.min.js
// An object with only one function : send(String)

function PubNubWrapper(channel, subChannel, onMessageCallback, koCallBack) {
    const pub_key = 'pub-c-f338e71f-c02f-406c-ae18-1808f11f05b2'
    const sub_key = 'sub-c-17d18004-7cd4-11ea-9770-0a12e0cf0d6e'

    const clientUUID = PubNub.generateUUID()

    const pubnub = new PubNub({
        publishKey: pub_key,
        subscribeKey: sub_key,
        uuid: clientUUID
    })

    pubnub.addListener({
        message: function (event) {
            onMessageCallback(event.message.entry, event.message.update)
        }
    })

    pubnub.subscribe({
        channels: [channel],
        withPresence: true
    })

    return {
        send: function (anUpdate) {
            const anEntry = subChannel
            pubnub.publish({
                    channel: channel,
                    message: {'entry': anEntry, 'update': anUpdate}
                },
                function (status, response) {
                    if (status.error) {
                        koCallBack(status)
                    }
                })
        }
    }
}
