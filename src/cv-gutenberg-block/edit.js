import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	useBlockProps,
	RichText,
	PanelColorSettings,
	MediaPlaceholder,
	BlockControls,
	MediaUploadCheck,
	MediaUpload,
	InnerBlocks,
} from "@wordpress/block-editor";
import "./editor.scss";
import { Fragment } from "@wordpress/element";
import {
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	ColorPalette,
	ColorPicker,
	GradientPicker,
	__experimentalBoxControl as BoxControl,
	RangeControl,
	ToolbarGroup,
	ToolbarButton,
	IconPicker,
} from "@wordpress/components";
// import InputControl from "@wordpress/components/build-types/input-control";
export default function Edit({ attributes, setAttributes }) {
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
		repeatIcon,
	} = attributes;
	return (
		<Fragment>
			<BlockControls>
				{url && (
					<ToolbarGroup>
						<ToolbarButton
							label={__("Remove Image", "cv-gutenberg-block")}
							icon="trash"
							onClick={() => setAttributes({ url: "", alt: "", id: "" })}
						/>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										url: media.url,
										alt: media.alt,
										id: media.id,
									})
								}
								allowedTypes={["image"]}
								value={id}
								render={({ open }) => (
									<ToolbarButton
										label={__("Upload Image", "cv-gutenberg-block")}
										icon="upload"
										onClick={open}
									/>
								)}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
				{gallery && (
					<ToolbarGroup>
						<ToolbarButton
							label={__("Remove Image", "cv-gutenberg-block")}
							icon="trash"
							onClick={() => setAttributes({ gallery: [] })}
						/>
						<MediaUploadCheck>
							<MediaUpload
								multiple={true}
								gallery={true}
								onSelect={(media) =>
									setAttributes({
										gallery: media,
									})
								}
								allowedTypes={["image"]}
								value={gallery.map((img) => img.id)}
								render={({ open }) => (
									<ToolbarButton
										label={__("Upload Image", "cv-gutenberg-block")}
										icon="upload"
										onClick={open}
									/>
								)}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
			</BlockControls>
			<InspectorControls>
				<PanelBody
					title={__("Choose Layout", "cv-gutenberg-block")}
					initialOpen={true}
				>
					<TextControl
						label={__("Title", "cv-gutenberg-block")}
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<SelectControl
						label={__("Select Tag", "cv-gutenberg-block")}
						value={tag}
						options={[
							{ label: __("H1", "cv-gutenberg-block"), value: "h1" },
							{ label: __("H2", "cv-gutenberg-block"), value: "h2" },
							{ label: __("H3", "cv-gutenberg-block"), value: "h3" },
							{ label: __("H4", "cv-gutenberg-block"), value: "h4" },
							{ label: __("H5", "cv-gutenberg-block"), value: "h5" },
							{ label: __("H6", "cv-gutenberg-block"), value: "h6" },
							{ label: __("P", "cv-gutenberg-block"), value: "p" },
						]}
						onChange={(tag) => setAttributes({ tag })}
					/>
					<BoxControl
						label={__("Padding", "cv-gutenberg-block")}
						values={Padding}
						onChange={(value) => setAttributes({ Padding: value })}
					/>
					<RangeControl
						label={__("Radius", "cv-gutenberg-block")}
						value={radius}
						onChange={(radius) => setAttributes({ radius })}
						min={0}
						max={100}
					/>
					{/* <PanelRow>
						<p>{__("Title Color", "cv-gutenberg-block")}</p>
					</PanelRow> */}
					{/* <ColorPalette
						colors={[
							{ name: "red", color: "#f00" },
							{ name: "white", color: "#fff" },
							{ name: "blue", color: "#00f" },
							{ name: "green", color: "#0f0" },
							{ name: "black", color: "#000" },
							{ name: "yellow", color: "#ff0" },
							{ name: "cyan", color: "#0ff" },
							{ name: "magenta", color: "#f0f" },
							{ name: "gray", color: "#808080" },
							{ name: "light gray", color: "#c0c0c0" },
							{ name: "dark gray", color: "#404040" },
							{ name: "olive", color: "#808000" },
							{ name: "navy", color: "#000080" },
						]}
						value={titleColor}
						onChange={(titleColor) => setAttributes({ titleColor })}
					/> */}
					{/* <ColorPicker
						color={titleColor}
						onChangeComplete={(value) => setAttributes({
							titleColor: value.hex
						})}
						disableAlpha
					/> */}
				</PanelBody>
				<PanelBody
					title={__("Gradient", "cv-gutenberg-block")}
					initialOpen={true}
				>
					<GradientPicker
						value={gradientBg}
						onChange={(currentGradient) =>
							setAttributes({ gradientBg: currentGradient })
						} //setAttributes(currentGradient)}
						gradients={[
							{
								gradient:
									"linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
								name: "Vivid cyan blue to vivid purple",
								slug: "vivid-cyan-blue-to-vivid-purple",
							},
							{
								gradient:
									"linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
								name: "Light green cyan to vivid green cyan",
								slug: "light-green-cyan-to-vivid-green-cyan",
							},
							{
								gradient:
									"linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
								name: "Luminous vivid amber to luminous vivid orange",
								slug: "luminous-vivid-amber-to-luminous-vivid-orange",
							},
							{
								gradient:
									"linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
								name: "Luminous vivid orange to vivid red",
								slug: "luminous-vivid-orange-to-vivid-red",
							},
							{
								gradient:
									"linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
								name: "Very light gray to cyan bluish gray",
								slug: "very-light-gray-to-cyan-bluish-gray",
							},
							{
								gradient:
									"linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
								name: "Cool to warm spectrum",
								slug: "cool-to-warm-spectrum",
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Repeat Icon", "cv-gutenberg-block")}
					initialOpen={true}
				>
					<button 
					onClick={()=>setAttributes({
						repeatIcon: [
							...repeatIcon,
							{
								id: repeatIcon.length + 1,
								repeatIcon: ''
							}
						]
					})}>
						Add New Icon
						</button>
						{
							repeatIcon && repeatIcon.map((item, index) => {
								return (
									<div key={index}>
										<TextControl
										label={__(`Repeat Icon ${index + 1}`, "cv-gutenberg-block")}
											value={item.repeatIcon}
											onChange={(value) =>{
												const newRepeatIcon = [...repeatIcon]
												newRepeatIcon[index].repeatIcon = value
												setAttributes({ repeatIcon: newRepeatIcon })
											} }
										/>
									</div>
								)
							})
						}
				</PanelBody>
				<PanelColorSettings
					title={__("Color Settings", "cv-gutenberg-block")}
					initialOpen={true}
					colorSettings={[
						{
							value: titleColor,
							onChange: (titleColor) => setAttributes({ titleColor }),
							label: __("Title Color", "cv-gutenberg-block"),
						},
						{
							value: BgColor,
							onChange: (BgColor) => setAttributes({ BgColor }),
							label: __("Background Color", "cv-gutenberg-block"),
						},
					]}
					// colors={[
					// 		{ name: "red", color: "#f00" },
					// 		{ name: "white", color: "#fff" },
					// 		{ name: "blue", color: "#00f" },
					// 		{ name: "green", color: "#0f0" },
					// 		{ name: "black", color: "#000" },
					// 		{ name: "yellow", color: "#ff0" },
					// 		{ name: "cyan", color: "#0ff" },
					// 		{ name: "magenta", color: "#f0f" },
					// 		{ name: "gray", color: "#808080" },
					// 		{ name: "light gray", color: "#c0c0c0" },
					// 		{ name: "dark gray", color: "#404040" },
					// 		{ name: "olive", color: "#808000" },
					// 		{ name: "navy", color: "#000080" },
					// 	]}
				/>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: "team-member-1x",
				})}
			>
				<div
					className="team-member-1"
					style={{ background: gradientBg, borderRadius: `${radius}px` }}
				>
					{gallery ? (
						<div className="gallery">
							{gallery.map((img, index) => {
								return (
									<div key={index}>
										<img src={img.url} alt={img.alt} id={img.id} />
									</div>
								);
							})}
						</div>
					) : (
						<MediaPlaceholder
							onSelect={(media) => setAttributes({ gallery: media })}
							allowedTypes={["image"]}
							multiple={true}
							labels={{ title: "Add Gallery" }}
						/>
					)}
					<RichText
						tagName={tag}
						value={title}
						onChange={(title) => setAttributes({ title })}
						placeholder={__("Title", "cv-gutenberg-block")}
						style={{ color: titleColor, backgroundColor: BgColor }}
					/>
					<h1>{title}</h1>
					{url ? (
						<img className="member-image-1" src={url} alt={alt} id={id} />
					) : (
						<MediaPlaceholder
							onSelect={(media) => {
								setAttributes({
									url: media.url,
									alt: media.alt || "image",
									id: media.id,
								});
							}}
							allowedTypes={["image"]}
							multiple={false}
							labels={{ title: "Add Image" }}
						/>
					)}
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

					<InnerBlocks
						// template={[
						// 	['core/heading', {placeholder: 'Enter Heading'}],
						// 	['core/paragraph', {placeholder: 'Enter Paragraph'}],
						// ]}
						// templateLock={true}
						// allowedBlocks={[
						// 	"core/heading",
						// 	"core/image"
						// ]}
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					/>
				</div>
			</div>
		</Fragment>
	);
}
