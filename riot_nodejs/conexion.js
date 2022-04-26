import { createConnection } from "mysql";
export default  function(params) {
    var con = createConnection({
        host: "localhost",
        user: "root",
        password: ""
    });
    con.connect(function(err) {
        if (err) throw err;
    });
}

