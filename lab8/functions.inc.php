<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        $amount=$quantity*$price;
        echo "<tr>";
        echo "<td><img src='images/books/tinysquare/$file'></td>";
        echo "<td>$title</td>";
        echo "<td>$quantity</td>";
        echo "<td>$price</td>";
        echo "<td>$amount</td>";
        echo "</tr>";
    }
?>