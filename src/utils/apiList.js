export default {
    base_url: "https://qwanda-service.outcome-hub.com",
    redirectUri: (process.env.NODE_ENV === "development") ? "http://localhost:3000/" : "https://genny.outcome-hub.com/"

}