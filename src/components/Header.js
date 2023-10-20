import '../css/header.css';

function Header() {
	return (
		<div class='header'>
			<div class='sub-header-1'>
				<u>SM</u>
			</div>
			<div class='sub-header-2'>
				<div class='sub-header-3'>
					<a href='#about-me' class='hyperlink'>
						ABOUT ME
					</a>
				</div>
				<div class='sub-header-3'>
					<a href='#skills' class='hyperlink'>
						SKILLS
					</a>
				</div>
				<div class='sub-header-3'>
					<a href='#experience' class='hyperlink'>
						EXPERIENCE
					</a>
				</div>
				<div class='sub-header-3'>
					<a href='#contact' class='hyperlink'>
						CONTACT
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
