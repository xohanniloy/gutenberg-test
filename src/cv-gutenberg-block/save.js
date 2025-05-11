import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
export default function save({ attributes, setAttributes }) {
	const {
		title,
		tag,
		titleColor,
		BgColor,
		gradientBg,
		Padding,
		radius,
		url,
		alt,
		id,
		gallery,
		repeatIcon
	} = attributes;
	return (
		<Fragment>
			<div
				{...useBlockProps.save({
					className: "team-member-1x",
				})}
			>
				<div
					className="team-member-1"
					style={{ background: gradientBg, borderRadius: `${radius}px` }}
				>
					{gallery && (
						<div className="gallery">
							{gallery.map((img, index) => {
								return (
									<div key={index}>
										<img src={img.url} alt={img.alt} id={img.id} />
									</div>
								);
							})}
						</div>
					)}
					<RichText.Content
						tagName={tag}
						value={title}
						style={{ color: titleColor, backgroundColor: BgColor }}
					/>
					<h1>{title}</h1>
					<img className="member-image-1" src={url} alt={alt} id={id} />
					<div
						className="member-info-1"
						style={{
							padding: `${Padding.top} ${Padding.right} ${Padding.bottom} ${Padding.left}`,
						}}
					>
						<h3 className="member-name-1">Alex Johnson</h3>
						<p className="member-role-1">Product Designer</p>
						<p className="member-bio-1">
							Alex brings over 8 years of experience in creating intuitive user
							interfaces and seamless product experiences.
						</p>
						<div className="social-links-1">
							{repeatIcon.map((icon, index) => {
								return (
									<a href="#" className="social-link-1" key={index}>
										<i className={icon.repeatIcon}></i>
									</a>
								);	
							})}
							{/* <a href="#" className="social-link-1">
								<i className="fa-brands fa-twitter"></i>
							</a>
							<a href="#" className="social-link-1">
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
							<a href="#" className="social-link-1">
								<i className="fa-brands fa-github"></i>
							</a> */}
						</div>
					</div>

					 <InnerBlocks.Content />
				</div>
			</div>
		</Fragment>
	);
}
