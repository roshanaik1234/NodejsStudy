export default function Dashboard(data) {
    console.log("data", data);
    return `<h1>Welcome User ${data.username}</h1>`
}