const conexion=require("./conexion.js");
    function nuevaConexion(){
        conexion.connect(function(err) {
        if (err) throw err;
        conexion.query("select from campeoneslol where id=420", function (err, result) {
          if (err) throw err;
          return result;
        });
      });
}

