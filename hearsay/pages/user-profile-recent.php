<?php include '../includes/header.php' ?>
<body class="bkg-light">
		<div id="title-bar">
			<h2>Mario Spazoli</h2>
			<img src="../i/back-button.png" alt="back-button" height="25" class="btn-back" />
		</div>
		<?php include '../includes/profile-box.php' ?>

		<ul class="tab-bar clearfix">
			<li>Feed</li>
			<li class="active">Recent<span></span></li>
			<li>Topics</li>
			<li>Sources</li>
		</ul>
		<ul class="list feed-list">
			<li>
				<a class="slide avatar-wrap" href="#userProfile">
					<img src="/i/avatar2.jpg" alt="avatar" class="avatar" />
					<span class="score">123</span>
				</a>
				<div class="item-info">
					<div class="timestamp">2 hrs</div>
					<h5>Mario Garcia</h5>
					<h3><a class="slide" href="#articlePreview">Apple Fans Wowed By Launch of iToilet</a></h3>
					<ul class="credit clearfix">
						<li>44 Reads &middot; Guardian</li>
					</ul>
					<div class="arrow-right"></div>
				</div>
			</li>
			<li>
				<a class="slide avatar-wrap" href="#userProfile">
					<img src="/i/avatar3.jpg" alt="avatar" class="avatar" />
					<span class="score">123</span>
				</a>
				<div class="item-info">
					<div class="timestamp">4 hrs</div>
					<h5>Mario Garcia via Twitter</h5>
					<h3><a class="slide" href="#articlePreview">They have a point</a></h3>
					<div class="arrow-right"></div>
				</div>
			</li>
			<li>
				<a class="slide avatar-wrap" href="#userProfile">
					<img src="/i/avatar2.jpg" alt="avatar" class="avatar" />
					<span class="score">123</span>
				</a>
				<div class="item-info">
					<div class="timestamp">2 hrs</div>
					<h5>Mario Garcia</h5>
					<h3><a class="slide" href="#articlePreview">Apple Fans Wowed By Launch of iToilet</a></h3>
					<ul class="credit clearfix">
						<li>44 Reads &middot; Washington Post</li>
					</ul>
					<div class="arrow-right"></div>
				</div>
			</li>
		</ul>
<?php include '../includes/footer.php' ?>