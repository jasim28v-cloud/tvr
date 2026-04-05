// ==================== XSphere - Firebase Configuration ====================
const firebaseConfig = {
    apiKey: "AIzaSyD6onUYeql3oDrJLOzWW7vb0ZbmXuzeHr4",
    authDomain: "dokx-e56ad.firebaseapp.com",
    databaseURL: "https://dokx-e56ad-default-rtdb.firebaseio.com/",
    projectId: "dokx-e56ad",
    storageBucket: "dokx-e56ad.firebasestorage.app",
    appId: "1:1027440008351:web:b83592ac261e8c2782d6aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// Cloudinary
const CLOUD_NAME = 'dkredfmfe';
const UPLOAD_PRESET = 'for_5g';

// Agora
const AGORA_APP_ID = '929646610d814d529a06c4081c81325f';

// Admin Account
const ADMIN_EMAIL = 'jasim88v@gmail.com';
const ADMIN_PASSWORD = 'kk2314kk';

// Site Name
const SITE_NAME = 'XSphere';

console.log('✅ XSphere - Firebase, Cloudinary & Agora Ready');
