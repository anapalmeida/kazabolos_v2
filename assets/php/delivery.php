<?php

// if(isset($_POST['email']) &&!empty($_POST['email']){
    $nome = addslashes($_POST['nome']);
    $tel = addslashes($_POST['tel']);
    $cep = addslashes($_POST['cep']);
    $rua = addslashes($_POST['rua']);
    $numero = addslashes($_POST['numero']);
    $complemento = addslashes($_POST['complemento']);
    $bairro = addslashes($_POST['bairro']);
    $cidade = addslashes($_POST['cidade']);
    $uf = addslashes($_POST['uf']);
    $data_entrega = addslashes($_POST['data_entrega']);
    $pedidos = addslashes($_POST['pedidos']);
    $obs = addslashes($_POST['obs']);
    
    // $select_values = addslashes($_POST['opt[]']);

    // $select_values = array(); 
    // $i = 0;
      
    // Check if form is submitted successfully
    // if(isset($_POST["submit"])) 
    // {
    //     // Check if any option is selected
    //     if(isset($_POST["opt"])) 
    //     {
    //         // Retrieving each selected option
    //         foreach ($_POST['opt'] as $option) {
    //             $select_values[$i] = $option;
    //             $i++;
    //         }
    //     }
    // else
    //     echo "Select an option first !!";
    // }
    
    // $pedidos = implode(",", $select_values);
    // $pedidos = $produtos;

    // sending email
    $to_email = "mariana.fatecdmd@gmail.com";
    $subject = "Kaza Bolos - Novo pedido";
    $body = "NOVO PEDIDO" ."\r\n
            Nome: ".$nome. "\r\n
            Telefone: ".$tel. "\r\n
            CEP: ".$cep. "\r\n
            Rua: ".$rua. "\r\n
            Nº: ".$numero. "\r\n
            Complemento: ".$complemento. "\r\n
            Bairro: ".$bairro. "\r\n
            Cidade: ".$cidade. "\r\n
            UF: ".$uf. "\r\n
            Produtos: ".$pedidos. "\r\n
            Data de entrega: ".$data_entrega. "\r\n
            Observações: ".$obs. "\r\n";
    $headers = "From: Site Kaza Bolos";

    if (mail($to_email, $subject, $body, $headers)) {
        echo "Pedido realizado com sucesso.";
    } else {
        echo "Falha no envio do pedido :(";
    }


    // Database
    $servername = "localhost";
    $database = "kazabolos";
    $username = "root";
    $password = "";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    // if (!$conn) {
    //     die("Connection failed: " . mysqli_connect_error());
    // }
    
    // echo "Connected successfully";
    
    $sql = "INSERT INTO pedidos (nome, telefone, cep, rua, numero, complemento, bairro, cidade, uf, data_entrega, pedidos, obs)
             VALUES ('{$nome}', '{$tel}', '{$cep}', '{$rua}', '{$numero}', '{$complemento}', '{$bairro}', '{$cidade}', '{$uf}', 
                    '{$data_entrega}', '{$pedidos}', '{$obs}')";

    if (mysqli_query($conn, $sql)) {
        echo "\r \n Pedido enviado para o banco de dados.";
    } else {
        echo "\r \n Erro no envio para o banco de dados.";
        }

    mysqli_close($conn);


?>