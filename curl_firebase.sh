curl -X POST -H "Authorization: key=AAAANaNu0ho:APA91bF5zlYwGg-MCZyZFco41hMSEtAYAJHlrAKxT6xduig2YlkI_WqoDY-Mc_qDHgWonJl9XHv_bkdnfswzdahczpLN-YdzTXLPKrxIeBzaTPnXwdR2SmPRDBE9o2wCA6o-1JQxup6v" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "New Article",
    "body": "Firebase Cloud Messaging for Web using JavaScript",
    "icon": "./alarm.jpg",
    "click_action": "http://rakibul.net/fcm-web-js"
  },
  "to": "fj5fG3CyzVE:APA91bGo7eQDzyWt63TxEzV9_OrWLHWCgP3ZClkHb6J5Funn87-ydjye4sS3G2rPfuL26YV_RkUhGYanLujgfHY_HRPbObH0jRWbR6ghzmzNbO879trVT2082Pw8Z6hRcxrJuLrq5SgD"
}' "https://fcm.googleapis.com/fcm/send"
