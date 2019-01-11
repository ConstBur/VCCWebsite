<?php
include_once("../phpconnect.php");
global $conn;
class User
{
    protected $username;

    public function __construct()
    {

    }

    public static function getByUsername($username)
    {
        $sql = "SELECT * FROM Users WHERE UserName = :UserName";
        $sth = mysqli_prepare($sql);
        $sth->execute(array(":UserName" => $username));
        $result = $sth->fetchAll();

        if(!empty($result))
        {
            $user = new User();
            $user->user_id = $result[0]["UserId"];
            $user->username = $username;
            $user->password = $result[0]["PasswordHash"];
            return $user;
        }
        else return false;
    }

    protected function initRoles()
    {
        $this->roles = array();
        $sql = "SELECT t1.role_id, t2.role_name FROM user_role as t1
        JOIN roles as t2 ON t1.role_id = t2.role_id
        WHERE t1.user_id = :user_id";
        $sth = mysqli_prepare($sql);
        $sth->execute(array(":user_id" => $this->user_id));

        while($row = $sth->fetch(mysqli_fetch_assoc($sql)))
        {
            
        }
    }
}
?>