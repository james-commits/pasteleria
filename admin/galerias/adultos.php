<?php
if (isset($_FILES['image']) && isset($_POST['name'])) {
  $image = $_FILES['image'];
  $name = $_POST['name'];

  // Verifica si la imagen se subió correctamente
  if ($image['error'] === UPLOAD_ERR_OK) {
    $directory = '../../img/adultos';
    $imagePath = $directory . '/' . $image['name'];
    move_uploaded_file($image['tmp_name'], $imagePath);

    // Lee el contenido del archivo JSON
    $data = [];
    if (file_exists('../../js/adultos.json')) {
      $json = file_get_contents('../../js/adultos.json');
      $data = json_decode($json, true);
    }
   
    $mainstr = $image['name'];
    $str = $mainstr;
    $str1 = substr($str, 1);
    $sig = '/';
       
    $ruta = 'img/adultos'.$sig.$str;
    $str3 = str_replace("\\\\", '/', $ruta);
    // Agrega el nuevo objeto al array
    $data[] = [
      'name' => $name,
      'img' => $str3,
    ];

    // Codifica el array a una cadena JSON y escriba la cadena en el archivo JSON
    file_put_contents('../../js/adultos.json', json_encode($data));
    
 
    header("Location: adultos.html");
    echo "Exito";
  } else {
    // Maneja el error de subida de imagen
    // ...
    
  }
}
?>