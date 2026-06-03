export default function Login(req, res) {
    return `<h1>Login Page</h1><br>
        <form action="/submit" method="post">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="password" name="password" placeholder="Password" required><br><br><br>
            <button>Login</button>
            <a href='/'>Go to Home</a>
        </form>`
}