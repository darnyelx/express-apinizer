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

<table>
    <thead>
        <tr>
            <td>s/n</td>
            <td>Method</td>
            <td>Parameters</td>
            <td>Info</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>withSuccess(statusCode,customMessage)</td>
            <td>
                    <p><b>statusCode(required):</b> Supply any success http code. Failure to add a status codes throws a no method supplied error </p>
                    <p><b>customMessage(optional):</b> Failure to add a status codes throws a no method supplied error </p>
            </td>
            <td>
                <p>This method is used when the request has succeeded with no error</p>
            </td>
        </tr>
        <tr>
                    <td>2</td>
                    <td>withServerError(statusCode,customMessage)</td>
                    <td>
                            <p><b>Status Code(required):</b> Failure to add a status codes throws a no method supplied error </p>
                    </td>
         </tr>
    </tbody>
</table>