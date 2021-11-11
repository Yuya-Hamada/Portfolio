<?php

if($_SERVER["REQUEST_METHOD"] != "POST"){
	header("Location: index.html");
	exit();
}

$title= $_POST['title'];
$name = $_POST['name'];
$email = $_POST['email'];
$contact_body = $_POST['contact_body'];

?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>確認画面</title>
<style type="text/css">
	body {
		background-color: #f5f4e8;
		text-align: center;
		vertical-align: middle;
	}
	.input-area {
		margin-bottom: 20px;
	}
	p {
		font-weight: bold;
		font-size: 20px;
	}
	.btn-border {
		display: inline-block;
		max-width: 180px;
		text-align: left;
		border: 2px solid #F9CE00;
		font-size: 15px;
		color: #F9CE00;
		text-decoration: none;
		font-weight: bold;
		padding: 8px 16px;
		border-radius: 4px;
		transition: .4s;
	}
	.btn-border:hover {
		background-color: #9ec34b;
		border-color: #cbe585;
		color: #FFF;
	}
</style>
</head>
<body>
 	<form action="complete.php" method="post">
 		<h2>お問い合わせ内容確認</h2>
    <div class="input-area">
		 	<p>件名</p>
		 	[<?php echo htmlspecialchars($title,ENT_QUOTES,'UTF-8');?>]
		</div>

	 	<div class="input-area">
		 	<p>お名前</p>
		 	[<?php echo htmlspecialchars($name,ENT_QUOTES,'UTF-8');?>]
		</div>

		<div class="input-area">
		 	<p>メールアドレス</p>
		 	[<?php echo htmlspecialchars($email,ENT_QUOTES,'UTF-8');?>]
	 	</div>

		<div class="input-area">
	 		<p>お問い合わせ内容</p>
	 		<?php echo nl2br(htmlspecialchars($contact_body,ENT_QUOTES,'UTF-8'));?>
		</div>
	 	<div class="input-area">
	 		<input type='button' onclick='history.back()' value='戻る' class="btn-border">
	 		<input type="submit" name="submit" value="送信" class="btn-border">
      <input type="hidden" name="title" value="<?php echo $title;?>">
	 		<input type="hidden" name="name" value="<?php echo $name;?>">
	 		<input type="hidden" name="email" value="<?php echo $email;?>">
	 		<input type="hidden" name="contact_body" value="<?php echo $contact_body;?>">
	 	</div>
	</form>
</body>
</html>
