var config = { apiKey: "AIzaSyBDD0es3G-d294LJMqLd2cbhCBXWkO7_GY",
                authDomain: "shashank-sj.firebaseapp.com",
                databaseURL: "https://shashank-sj.firebaseio.com",
                projectId: "shashank-sj",
                storageBucket: "shashank-sj.appspot.com",
                messagingSenderId: "323849294240" };
                firebase.initializeApp(config);
                var reference = firebase.database().ref("messages"),
                form = document.querySelector("form");
                function submitForm(e) 
                { e.preventDefault();
                    var t = { email: document.getElementById("email").value,
                                message: document.getElementById("textarea").value
                            };
                    reference.push().set(t),
                    document.getElementById("email").value = "",
                    document.getElementById("textarea").value = "",
                    alert("Thank you for reaching out to me will get back to you :)")
                }
                form.addEventListener("submit", submitForm);