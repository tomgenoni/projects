<?php include '../includes/header.php' ?>
<body>
		<div id="title-bar">
			<h2>Mario Spazoli</h2>
			<img src="../i/back-button.png" alt="back-button" height="25" class="btn-back" />
		</div>
		<?php include '../includes/profile-box.php' ?>

		<ul class="tab-bar clearfix">
			<li>Feed</li>
			<li>Recent</li>
			<li>Topics</li>
			<li class="active">Sources<span></span></li>
		</ul>
		<ul class="list" >
			<li>
					<h3><a class="slide" href="#articlePreview">BBC</a></h3>
					<div class="arrow-right"></div>
			</li>
			<li>
					<h3><a class="slide" href="#articlePreview">Daily Telegraph</a></h3>
					<div class="arrow-right"></div>
			</li>
			<li>
					<h3><a class="slide" href="#articlePreview">La Stampa</a></h3>
					<div class="arrow-right"></div>
			</li>
		</ul>
<?php include '../includes/footer.php' ?>