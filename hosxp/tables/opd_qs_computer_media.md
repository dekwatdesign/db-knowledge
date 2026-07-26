# `opd_qs_computer_media`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_computer_media_id | int(11) | NO | PRI | 0 |  |  |
| media_name | varchar(100) | YES | UNI | NULL |  |  |
| media_url | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_media_name | media_name | yes | 1 |
| PRIMARY | opd_qs_computer_media_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_qs_computer_media_id": 1,
    "media_name": "ช่อง 5",
    "media_url": "http://61.91.12.34:1935/live/smil:tv5adaptive.smil/playlist.m3u8"
  },
  {
    "opd_qs_computer_media_id": 2,
    "media_name": "ช่อง TPBS",
    "media_url": "https://thaipbs-live.cdn.byteark.com/live/playlist_720p/index.m3u8"
  },
  {
    "opd_qs_computer_media_id": 3,
    "media_name": "ช่อง 3 Family",
    "media_url": "http://27.254.130.64/live02/ch1.m3u8?p="
  },
  {
    "opd_qs_computer_media_id": 4,
    "media_name": "ช่อง MCOT Family",
    "media_url": "http://mcotdigital-pnnouc.cdn.byteark.com/mcothd1080p_edge/smil:mcothd1080p.smil/playlist.m3u8"
  },
  {
    "opd_qs_computer_media_id": 5,
    "media_name": "ช่อง New 18",
    "media_url": "http://newtv.cdn.byteark.com/live/playlist_576p/index.m3u8"
  },
  {
    "opd_qs_computer_media_id": 6,
    "media_name": "ช่อง Nation",
    "media_url": "http://live.nationtv.tv/hls/ntv_th_hq.m3u8"
  },
  {
    "opd_qs_computer_media_id": 7,
    "media_name": "ช่อง GMM25",
    "media_url": "http://gmmservice.radical-enlighten.com/gmm/smil:gmm25.smil/playlist.m3u8"
  },
  {
    "opd_qs_computer_media_id": 8,
    "media_name": "ช่อง Now 26",
    "media_url": "http://nationstream.nationgroup.com/hls/th_high.m3u8"
  }
]
```
