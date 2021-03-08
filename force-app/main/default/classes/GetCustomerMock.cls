global class GetCustomerMock implements HttpCalloutMock {

    global Boolean shouldFail;
    global String bodyString;

    global GetCustomerMock(Boolean fail, String body) {
        this.shouldFail = fail;
        this.bodyString = body;
    }

    global HTTPResponse respond(HTTPRequest req) {

        HttpResponse res = new HttpResponse();
        if(shouldFail) {
            res.setBody('something went wrong');
            res.setStatusCode(500);
        }
        else {
            res.setHeader('Content-Type', 'application/json');
            res.setStatusCode(200);
            res.setBody(bodyString);
        }

        return res;
    }
}
