<?php
if (isset($_FILES['image']) && isset($_POST['name'])) {
  $image = $_FILES['image'];
  $name = $_POST['name'];

  // Verifica si la imagen se subió correctamente
  if ($image['error'] === UPLOAD_ERR_OK) {
    $directory = '/path/to/image/directory';
    $imagePath = $directory . '/' . $image['name'];
    move_uploaded_file($image['tmp_name'], $imagePath);

    // Agrega el objeto al archivo JSON
    $data = [];
    if (file_exists('data.json')) {
      $json = file_get_contents('data.json');
      $data = json_decode($json, true);
    }
    $data[] = [
      'name' => $name,
      'image' => $imagePath,
    ];
    file_put_contents('data.json', json_encode($data));
  } else {
    // Maneja el error de subida de imagen
    // ...
  }
}
?>