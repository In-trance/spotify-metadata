// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "5c822f08eea54e759bac0247ced7b906";
const redirectUri = "https://3000-ntrance-spotifymetadata-uq962vv9qkj.ws-us27.gitpod.io/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


// export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=BQDQ7rfhbhfpJESEsSY5OZlVXUoT-QlF_UN74qG2MIghRLfYC-4oY_m1jv7F5W5siTE_fMKM4rXUYuVLixwaGCk2T6XNRJurg_sVHHO3bRgeP8t5RvubYmyyHMDDnZRpkPF-3umq1DhGyQBdFG8KZFFl086TjQEde-c&show_dialog=true`;