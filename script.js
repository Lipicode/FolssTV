const firebaseConfig = {
apiKey: "AIzaSyBeMBl3RjpiT2lWe_FWqZNhE-rMTKI52Mw",
authDomain: "fryvid-38d1a.firebaseapp.com",
projectId: "fryvid-38d1a",
storageBucket: "fryvid-38d1a.firebasestorage.app",
messagingSenderId: "486304210780",
appId: "1:486304210780:web:69db24b7bd8a26d1216b99",
measurementId: "G-DBY45X3KYD"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const authBtn = document.getElementById("auth-btn");
const userSection = document.getElementById("user-section");
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const videoGrid = document.getElementById("video-grid");
authBtn.addEventListener("click", () => {
if (auth.currentUser) {
auth.signOut().then(() => {
authBtn.textContent = "🔑 Sign in";
userSection.innerHTML = `<button id="auth-btn">Sign in</button>`;
});
} else {
auth.signInWithPopup(provider).then((result) => {
const user = result.user;
authBtn.textContent = "🚪 Logout";
userSection.innerHTML = `<img src="${user.photoURL}" width="40" height="40"> <p>${user.displayName}</p>`;
});
}
});
const API_KEY = "AIzaSyAmhtArdGSmS6zC8962h1Sdptyj7gr_kfY";
searchBtn.addEventListener("click", () => {
const query = searchBar.value.trim();
if (!query) return;
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`)
.then(res => res.json())
.then(data => {
videoGrid.innerHTML = "";
data.items.forEach(video => {
const videoEl = document.createElement("div");
videoEl.classList.add("video-card");
videoEl.innerHTML = `
<iframe width="100%" height="200" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
<p>${video.snippet.title}</p>
`;
videoGrid.appendChild(videoEl);
});
})
.catch(err => console.error("YouTube API Error:", err));
});
