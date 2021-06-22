var firebaseConfig = {
    apiKey: "AIzaSyDD-UXNWpYuM-z0ML2EiKqi1_KK5XH2LNs",
    authDomain: "trial-6b2f1.firebaseapp.com",
    databaseURL: "https://trial-6b2f1-default-rtdb.firebaseio.com",
    projectId: "trial-6b2f1",
    storageBucket: "trial-6b2f1.appspot.com",
    messagingSenderId: "840562908622",
    appId: "1:840562908622:web:17cc6415ccb5a92d5bdf9f",
    measurementId: "G-MJHQG5F4LX"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    console.log(user_name);
    firebase.database().ref("/").child(user_name).update
    ({ purpose: "adding user" });
}
