export default function LoginForm(props){

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-green-100">
            <form onSubmit={props.login} method="POST">
                <input className="block my-4 border border-green-700" name="username" type="text" placeholder="User name" required/>
                <input className="block my-4 border border-green-700" name="password" type="password" placeholder="Password" required/>
                <button className="w-full bg-green-500">Login</button>
            </form>
        </div>
    )
}