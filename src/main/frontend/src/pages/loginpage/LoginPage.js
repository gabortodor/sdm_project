/*export default function LoginPage() {


    return (
    <body>
    <div id="root">
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#" method="post">
                    <h1>Create Account</h1>
                    <input name="email" type="email" placeholder="Email"/>
                    <input name="nickname" type="text" placeholder="Nickname"/>
                    <input name="firstName" type="text" placeholder="First Name"/>
                    <input name="lastName" type="text" placeholder="Last Name"/>
                    <input name="password" type="password" placeholder="Password"/>
                    <input name="password_confirm" type="password" placeholder="Confirm Password"/>
                    <button name="signUp">Sign Up</button>
                </form>
            </div>
            <div id="123" class="form-container sign-in-container">
                <form action="#" th:action="@{/login}" method="post">
                    <div th:if="${param.error}">
                        <script>
                            alert("Unsuccessful login.");
                        </script>
                    </div>
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" name="username" id="username"/>
                    <input type="password" placeholder="Password" name="password" id="password"/>
                    <a href="#" onclick="pass()">Forgot your password?</a>
                    <script>
                        function pass() {
                        document.getElementById("123").innerHTML =
                            ("<div class='reset-pass-container'><div>" +
                                "<form action='/home' method='post'>" +
                                "<h1>Dear User!</h1>" +
                                "<p>If you want to reset your password please add your email address below and click on the \"Send new password\" button</p>" +
                                "<input type='text' name='email' placeholder='Email'>" +
                                "<button type='submit' name='resetPassword' id='resetPassword'>Send new password!" +
                                "</button>" +
                                "</form></div><div class='back-button'><form action='/home'> " +
                                "<button type='submit'>Back</button> </form></div></div>")
                    }
                    </script>
                    <button name="signIn">Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>If you already have an account please sign in</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Welcome aboard!</h1>
                        <p>If you don't have an account yet kindly register by filling the form below</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    <script>
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

        signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    </script>
    <script
        th:if="${T(com.example.user_management_system.registration.RegistrationController).getCurrentException()!=null}">
        var msg = "[[${T(com.example.user_management_system.registration.RegistrationController).getCurrentException()}]]";
        alert(msg);
        var msg =
        "[[${T(com.example.user_management_system.registration.RegistrationController).setCurrentExceptionToNull()}]]";
    </script>
</html>
)
    ;
}*/