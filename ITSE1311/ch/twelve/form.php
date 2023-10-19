<style>
    p {
        font-size: 15px;
        font-family: verdana;
    }
</style>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $myName = $_POST['full_name'];
    $age = $_POST['age'];
    $email = $_POST['your_email'];
    $phone = $_POST['phone'];

    $time_of_day = $_POST['time_of_day'];



    $i = 0;
    $all_time_of_day_total = 0;
    $br = "<br />";
    
    if (is_array($time_of_day)) {
        foreach ($time_of_day AS $all_time_of_day) {
        
            $i++;

        //echo "Yes, it is an array" . $i . "<br />";
        //echo $all_time_of_day . "<br />";

        $all_time_of_day_total = $all_time_of_day . $br . $all_time_of_day_total;
        }
    }
    else {
        echo "No, it is not an array";
    }

    $message = "<p><strong>Full Name</strong>: " . $myName . "</p>";
    $message .= "<p><strong>Age</strong>: " . $age . "</p>";
    $message .= "<p><strong>Time of Day</strong><br />" . $all_time_of_day_total . "</p>";

    echo $message;
    //echo "Your name is " . $myName;
}
else {
    //echo "<a href=\"form.html\" target =\"_blank\">Please submit a form</a>";
    echo "<a href='form.html' target ='_blank'>Please submit a form</a>";
    header('Location: form.html');
	exit;
}

?>