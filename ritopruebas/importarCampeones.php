<?php
    class Resultados{
        public function __construct(){
        }
        
        public function consultaInsertValores($conexion,$id,$nombre,$url){
            //VARIABLES
            $consulta="insert into campeoneslol(ID,Nombre,Splashart) values (?,?,?)";
            $preparada = mysqli_prepare($conexion,$consulta);
            //$url=$conexion->mysqli_real_escape_string($url);
            mysqli_stmt_bind_param($preparada,'iss',$id,$nombre,$url);
            $respuesta=mysqli_stmt_execute($preparada);
            if($respuesta){
                echo "Inserción realizada<br>";
            }else{
                $respuesta="mysql_error()";
            }
            return $respuesta;
        }

        // public function getNombreCampeon($conexion,$id){
        //     //VARIABLES
        //     $consulta="select nombre from campeoneslol where ID = $id";
        //     $respuesta = mysqli_query($conexion, $consulta);
        //     $result = "";
        //     if($respuesta){
        //         $filas=$respuesta->fetch_array();
        //         $result=$filas[0];
        //     }else{
        //         $result="mysql_error()";
        //     }
        //     return $result;
        // }
        
        // public function getSplashartUrl($conexion,$id){
        //     //VARIABLES
        //     $consulta="select Splashart from campeoneslol where ID = $id";
        //     $respuesta = mysqli_query($conexion, $consulta);
        //     $result = "";
        //     if($respuesta){
        //         $filas=$respuesta->fetch_array();
        //         $result=$filas[0];
        //     }else{
        //         $result="mysql_error()";
        //     }
        //     return $result;
        // }
    }