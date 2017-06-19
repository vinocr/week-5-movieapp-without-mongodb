var should = require("chai").should(),
supertest = require("supertest"),
expect = require("chai").expect,
app = require("../index");
var url = supertest("http://localhost:3000");
describe("Movie Application testing", function(err){
 it("Checking that it gets into the Status code", function(done){
      url
       .get("/find?name=singam")
       .expect(200)
       .end(function(err,res){
         if (err) {
                        throw err;
                        
                }
         res.ok.should.equal(true);
         done();
       });  
   });
       
    it('Checking that JSON is an object or not', function(done) {
    url
      .get('/find?name=endhiran')
      .end(function(err, res) {
        var obj =JSON.parse(res.text);//parse JSON
        expect(typeof obj ).to.deep.equal('object');
        done();
      });
  });
  
  
  });