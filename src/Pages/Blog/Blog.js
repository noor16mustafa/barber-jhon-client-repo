import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='text-light my-5 pt-5'>
            <Container>
                <div className='bg-secondary border-bottom border-warning text-center'>
                    <h3>Difference between SQL and NoSQL</h3>
                </div>
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead className='text-center'>
                            <tr>
                                <th>SQL</th>
                                <th>NoSQ</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                <td>Non-relational or distributed database system.</td>
                            </tr>
                            <tr>

                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have dynamic schema</td>
                            </tr>
                            <tr>

                                <td>These databases are not suited for hierarchical data storage</td>
                                <td>These databases are best suited for hierarchical data storage.</td>
                            </tr>
                            <tr>

                                <td>These databases are best suited for complex queries</td>
                                <td>These databases are not so good for complex queries</td>
                            </tr>
                            <tr>

                                <td>Vertically Scalable</td>
                                <td>Horizontally scalable</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div className='bg-secondary border-bottom border-warning text-center'>
                    <h3 className='py-2'>What is JWT? How does it work?</h3>
                </div>
                <div>
                    <h5> What is JWT</h5>
                    <p>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
                    <h5>How does it works?</h5>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
                </div>
                <div className='bg-secondary border-bottom border-warning text-center'>
                    <h3 className='py-2'>Difference between JavaScript and NodeJS</h3>
                </div>
                <div>
                    <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.<br />
                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.<br />
                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.<br></br>
                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.<br></br>
                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.</p>
                </div>
                <div className='bg-secondary border-bottom border-warning text-center'>
                    <h3 className='py-2'>How does NodeJS handle multiple request at the same time</h3>
                </div>
                <div>
                    <p>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
                    </p>
                </div>

            </Container>
        </div>
    );
};

export default Blog;