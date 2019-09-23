<?php
require_once(dirname(__FILE__) . "/../config.php");
require_once(dirname(__FILE__) . "/../include_app/database.php");
$dbc = new dbc();
if (isset($_POST['works_variation_id']) && (int)$_POST['works_variation_id'] > 0) {
  $sql_player = "UPDATE works_variation SET play_count = play_count + 1 WHERE works_variation_id = ?";
  $param = array((int)$_POST["works_variation_id"]);
  $dbc->updateRow($sql_player, $param);
}