<?php

if(isset($_POST)){
	

	ob_start();
	?>
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Value</th>
			</tr>
			</thead>
			<tbody>
			<?php
			foreach($_POST as $k => $val){
				?>
				<tr>
					<td style="padding:10px;"><?php echo ucfirst(str_replace('_', ' ', $k)) ?></td>
					<td style="padding:10px;"><?php echo $val; ?></td>
				</tr>
				<?php
			}
			?>
			</tbody>
		</table>
	<?php
	$output = ob_get_clean();


	include_once 'libs/class.mail.php';
	$to_email = 'ryan@redorangedesign.com';
	$to_name = 'Ryan Stimmler';

	$to_email = 'bvassey@vamanufacturers.com';
	$to_name = 'Brett Vassey';

	if(!filter_var($_POST['pledge_email'], FILTER_VALIDATE_EMAIL)){
		echo 'Invalid Email';
		exit();
	}

	$mail = new SimpleMail();
	$mail->setTo($to_email, $to_name)
	     ->setSubject('New pledge received')
	     ->setFrom('no-reply@manufacturingskillsinstitute.com', 'Vision2020')
	     ->addMailHeader('Bcc', 'ryan@redorangedesign.com', 'Ryan Stimmler')
	     ->addGenericHeader('X-Mailer', 'PHP/' . phpversion())
	     ->addGenericHeader('Content-Type', 'text/html; charset="utf-8"')
	     ->setMessage($output)
	     ->setWrap(300);
	$send = $mail->send();
	echo ($send) ? 'Email sent successfully' : 'Could not send email';
	exit();
}