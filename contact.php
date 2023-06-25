<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $a=$_GET['name'];
        $b=$_GET['email'];
        $c=$_GET['phone'];
        $d=$_GET['message'];
        $con=mysqli_connect('localhost','root','','student');
        $q="insert into finalcontact value('$a','$b','$c','$d')";
        $rl=mysqli_query($con,$q);
        if($rl)
            echo"<script>
            alert('your msg has been sent');
            window.location='finance.html';
            </script>";
        else
            echo "error";
    ?>
</body>
</html>