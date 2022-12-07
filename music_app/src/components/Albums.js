import React from "react";
import PropTypes from "prop-types";
import "./Album.css";
import { Link } from "react-router-dom";

function Albums({ id, title, img }) {
	return (
		<div className="container">
		<div className="album">
			<Link to={"music-detail"} state={{ id, title, img }}>
			<div className="data">
				<div className="album_img">
					<img src={img} alt="album" />
				</div>
				<div className="contents">
					<div className="album_id">{"no." + id}</div>
					<div className="album_title">{title}</div>
				</div>
			</div>
			</Link>
			<div className="buttons">
			<button
				className="bt-play"
				onClick={() =>
				window.open("https://www.youtube.com/watch?v=mIYzp5rcTvU")
				}
			>
				<img
				src="https://cdn-icons-png.flaticon.com/512/106/106104.png?w=1060&t=st=1670206178~exp=1670206778~hmac=81a93969e44f3fae6b0c5534c118b27f35a3789bee1c12d95bdc13fafcdba18f"
				alt="play"
				/>
			</button>
			<button className="bt-add">
				<img
				src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
				alt="add"
				/>
			</button>
			<button className="bt-download">
				<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Download_alt_font_awesome.svg/1200px-Download_alt_font_awesome.svg.png"
				alt="download"
				/>
			</button>
			</div>
		</div>
		</div>
	);
}

Albums.prototype = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	userId: PropTypes.number,
};

export default Albums;
