import React from 'react';

const Blog = () => {
    return (
        <div className="mt-16 md:w-10/12 md:mx-auto ">
           <div className="flex flex-col gap-10 mx-2 md:mx-0">
           <div className="card card-compact  bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title">What is CORS?</h2>
                    <p>The word CORS stands for Cross-Origin Resource Sharing.It defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.CORS is blocked in modern browsers by default.Generally, for security reasons, browsers forbid requests that come in from cross-domain sources.</p>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Firebase is developed by google NoSQL real time database that provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.It is a Backend-as-a-Service.Its database is just a big JSON object where you can store whatever you want inside.Developers can use the service to build their apps without having to manage servers or write server-side code.We are using firabase to authenticate  users with the Firebase Auth service.</p>

                    <div>
                    <p>There are many other options to implement authentication.Some of these are :</p>
                    <ul className="list-disc list-inside">
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Okta</li>
                        <li>JSON Web Token</li>
                        <li>Amazon Cognito</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p>If you want your website's any specific route user can access only when user is logged in that is called a private route.Private route component renders child components if the user is logged in.</p>
                    <p>When any user try to access any private route developer first check is the user logged in.If the user is logged in developer allow the user to access that private children.If the user is not logged in,then developer force the user to log in and redirect to loggin page.After that when user successfully log in,then user can access the private route children.</p>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title">What is Node js? How does Node js work?</h2>
                    <p>Node js is single-threaded, open-source server environment buid on chrome v8 engine that can run on Windows, Linux, Unix, macOS, and more.It executes JavaScript code outside a web browser. It allows developers use JavaScript to write command line tools and for server-side scripting.</p>
                    <p>Node.js operates on a single-thread event loop, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections without incurring the cost of thread context switching.The design of sharing a single thread among all the requests that use the observer pattern is intended for building highly concurrent applications, where any function performing I/O must use a callback.To accommodate the single-threaded event loop, Node.js uses the libuv library—which, in turn, uses a fixed-sized thread pool that handles some of the non-blocking asynchronous I/O operations.</p>
                </div>
            </div>
           </div>

        </div>
    );
};

export default Blog;