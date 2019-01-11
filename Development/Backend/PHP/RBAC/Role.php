<?php
include_once("../phpconnect.php");
global $conn;
class Role
{
    protected $permissions;

    protected function __construct()
    {
        $this->permissions = array();
    }

    public static function getRolePerms($role_id)
    {
        $role = new Role();
        $sql = "SELECT p1.perm_desc FROM role_perm p1
        JOIN permissions p2 ON p1.perm_id = p2.perm_id
        WHERE p1.role_id = :role_id;";
        $sth = mysqli_prepare($conn, $sql);
        $sth->execute(array(":role_id" => $role_id));

        while($row = $sth->fetch(mysqli_fetch_assoc()))
        {
            $role->permissions[$row["perm_desc"]] = true;
        }
        return $role;
    }

    public function hasPerm($permission)
    {
        return isset($this->permissions[$permission]);
    }
}
?>