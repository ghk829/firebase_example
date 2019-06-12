importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/6.1.1/firebase-messaging.js")

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
var config = {
    messagingSenderId: "230375215642"
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Data Messaging so that it can handle background messages.
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = 'Data Message Title';
  const notificationOptions = {
    body: 'Data Message body',
    icon: 'alarm.jpg'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});