< !--firebase.js -->
    <script type="module">
  // Import Firebase SDKs
        import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
        import {getFirestore} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

        // 👉 Hier deine Firebase Config einsetzen
        const firebaseConfig = {
            apiKey: "DEIN_API_KEY",
        authDomain: "DEIN_PROJEKT.firebaseapp.com",
        projectId: "DEIN_PROJEKT_ID",
        storageBucket: "DEIN_PROJEKT.appspot.com",
        messagingSenderId: "DEINE_SENDER_ID",
        appId: "DEINE_APP_ID"
  };

        // Init
        const app = initializeApp(firebaseConfig);
        export const db = getFirestore(app);
    </script>
