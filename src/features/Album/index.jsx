import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Top Nhạc Âu Mỹ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/5/4/7/95473f42319ac6c5e4934ea446534a86.jpg",
    },
    {
      id: 2,
      name: "Top Nhạc Rap Việt",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg",
    },
    {
      id: 3,
      name: "Top Nhạc Dance Âu Mỹ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
    },
    {
      id: 4,
      name: "Top Nhạc Hàn Quốc",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg",
    },
  ];

  return (
    <div>
      <h3>Playlist Nghe Là Thích</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
