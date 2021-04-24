import PushNotification from 'react-native-push-notification';
import NotificationHandler from './NotificationHandler';

export default class NotifService {
    constructor(onRegister, onNotification) {
        this.lastId = 0;
        this.lastChannelCounter = 0;

        this.createDefaultChannels();

        NotificationHandler.attachRegister(onRegister);
        NotificationHandler.attachNotification(onNotification);


        PushNotification.getApplicationIconBadgeNumber(function (number) {
            if (number > 0) {
                PushNotification.setApplicationIconBadgeNumber(0);
            }
        });

        PushNotification.getChannels(function (channels) {
            // console.log(channels);
        });
    }

    createDefaultChannels() {
        PushNotification.createChannel(
            {
                channelId: "default-channel-id",
                channelName: `Default channel`,
                channelDescription: "A default channel",
                soundName: "default",
                importance: 4,
                vibrate: true,
            },
            (created) => console.log(`hai`)
        );
        PushNotification.createChannel(
            {
                channelId: "sound-channel-id",
                channelName: `Sound channel`,
                channelDescription: "A sound channel",
                soundName: "sample.mp3",
                importance: 4,
                vibrate: true,
            },
            (created) => console.log(`hai`)
        );
    }



    localNotif(soundName) {
        this.lastId++;
        PushNotification.localNotification({
            /* Android Only Properties */
            channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
            autoCancel: true,
            largeIcon: 'ic_launcher',
            smallIcon: 'ic_notification',
            vibrate: true,
            vibration: 300,
            group: 'group',
            groupSummary: false,
            ongoing: false,
            invokeApp: true,

            when: null,
            usesChronometer: false,
            timeoutAfter: null,

            /* iOS only properties */

            /* iOS and Android properties */
            id: this.lastId,
            title: 'Promosi Listing',
            message: 'Listing properti anda berhasil dibagikan!',
            playSound: !!soundName,
            soundName: soundName ? soundName : 'default',
            number: 10,
        });
    }


    checkPermission(cbk) {
        return PushNotification.checkPermissions(cbk);
    }

    requestPermissions() {
        return PushNotification.requestPermissions();
    }
}