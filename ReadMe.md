<h1>Express Apinizer</h1>

This is a express middleware that standardizes api responses across your application.

<h4>Usage:</h4>  
`const apinizer = require('express-apinizer');`
<br><br>
<h6>As a global middleware</h6>
 `  app.use(apinizer(options));`
  <h6>For individual middleware routing</h6>
  `app.get('/users  apinizer(), function(request,respond){
    respond.withSuccess(200).reply();
  });`
<br><br>

<h4>Methods</h4>

<h5>.withSuccess(statusCode[,message])</h5>
This method is used to send a success response back to endpoint. 
<h6>Parameters</h6>
<small><b>statusCode</b> (compulsory): <b>Datatype:integer</b>? Takes an integer between 200-299</small>
<small><b>message</b> (optional): <b>Datatype:string</b>? A custom message detailing the what the success is about. </small>  

<h5>.withData(data)</h5>
This method is used to attach an error data to the error data object.
This method is used alongside withClientError method or withServerError method
 
<h6>Parameters</h6>
<small><b>data</b> (compulsory): This can be any datatype except `null` </small>

<h5>.withClientError(statusCode[,message])</h5>
This method is used to send a client response back to endpoint. 
<h6>Parameters</h6>
<small><b>statusCode</b> (compulsory): <b>Datatype:integer</b>? Takes an integer between 400-499</small>
<small><b>message</b> (optional): <b>Datatype:string</b>? A custom message detailing what the error is about. </small>  

<h5>.withServerError(statusCode[,message])</h5>
This method is used to send a server response back to endpoint. 
<h6>Parameters</h6>
<small><b>statusCode</b> (compulsory): <b>Datatype:integer</b>? Takes an integer between 500-599</small>
<small><b>message</b> (optional): <b>Datatype:string</b>? A custom message detailing the what the success is about. </small>  

<h5>.withErrorData(data)</h5>
This method is used to attach an error data to the error data object.
This method is used alongside withClientError method or withServerError method
<h6>Parameters</h6>
<small><b>data</b> (compulsory): This can be any datatype except `null` </small>

<h5>.reply()</h5>
Every api response request must end with a reply method.
This doesn't take any parameter and failure to chain this method to the response would prevent a response from being sent back



