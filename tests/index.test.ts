import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

describe("Tests Endpoint", function () {
  this.timeout(10000);

  it("verifies successful /", async () => {
    const result = await chai.request("http://localhost:3000").get("/");
    expect(result.status).to.equal(200);
    expect(result.body).to.be.an("object");
    expect(result.body.success).to.be.a("string");
    expect(result.body.success).to.be.eq("hello");
  });

  it("verifies successful /hello", async () => {
    const result = await chai.request("http://localhost:3000").get("/hello");
    expect(result.status).to.equal(200);
    expect(result.body).to.be.an("object");
    expect(result.body.success).to.be.a("string");
    expect(result.body.success).to.be.eq("hello world");
  });
});
