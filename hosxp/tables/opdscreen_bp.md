# `opdscreen_bp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_bp_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| screen_date | date | YES | MUL | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| o2sat | int(11) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| bfr | int(11) | YES |  | NULL |  |  |
| vp | int(11) | YES |  | NULL |  |  |
| dp | int(11) | YES |  | NULL |  |  |
| ufr | int(11) | YES |  | NULL |  |  |
| vol_remove | int(11) | YES |  | NULL |  |  |
| nursing_care_text | text | YES |  | NULL |  |  |
| opdscreen_bp_loc_type_id | int(11) | YES |  | NULL |  |  |
| opdscreen_bp_ret_type_id | int(11) | YES |  | NULL |  |  |
| etco2 | double(15,3) | YES |  | NULL |  |  |
| news2_score | int(11) | YES |  | NULL |  |  |
| consciousness_level_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_date | screen_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opdscreen_bp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opdscreen_bp_id": 3,
    "vn": "560712082035",
    "screen_date": "2013-07-12",
    "screen_time": "13:56:00",
    "staff": "[MASKED_FULLNAME]",
    "bps": 161.0,
    "bpd": 103.0,
    "hos_guid": null,
    "depcode": null,
    "rr": null,
    "pulse": null,
    "o2sat": null,
    "temperature": null,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  },
  {
    "opdscreen_bp_id": 4,
    "vn": "560712082035",
    "screen_date": "2013-07-12",
    "screen_time": "14:00:00",
    "staff": "[MASKED_FULLNAME]",
    "bps": 155.0,
    "bpd": 102.0,
    "hos_guid": null,
    "depcode": null,
    "rr": null,
    "pulse": null,
    "o2sat": null,
    "temperature": null,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  },
  {
    "opdscreen_bp_id": 6,
    "vn": "610615103032",
    "screen_date": "2018-06-15",
    "screen_time": "9:32:00",
    "staff": "[MASKED_FULLNAME]",
    "bps": 125.0,
    "bpd": 62.0,
    "hos_guid": null,
    "depcode": null,
    "rr": null,
    "pulse": null,
    "o2sat": null,
    "temperature": null,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  },
  {
    "opdscreen_bp_id": 8,
    "vn": "610615093038",
    "screen_date": "2018-06-15",
    "screen_time": "9:56:00",
    "staff": "[MASKED_FULLNAME]",
    "bps": 138.0,
    "bpd": 73.0,
    "hos_guid": null,
    "depcode": null,
    "rr": null,
    "pulse": null,
    "o2sat": null,
    "temperature": null,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  },
  {
    "opdscreen_bp_id": 10,
    "vn": "611025132552",
    "screen_date": "2018-10-25",
    "screen_time": "13:41:00",
    "staff": "[MASKED_FULLNAME]",
    "bps": 159.0,
    "bpd": 74.0,
    "hos_guid": null,
    "depcode": null,
    "rr": null,
    "pulse": null,
    "o2sat": null,
    "temperature": null,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  },
  {
    "opdscreen_bp_id": 11,
    "vn": "611029133717",
    "screen_date": "2018-10-29",
    "screen_time": "14:00:18",
    "staff": "[MASKED_FULLNAME]",
    "bps": 144.0,
    "bpd": 95.0,
    "hos_guid": null,
    "depcode": null,
    "rr": 0,
    "pulse": 88,
    "o2sat": 0,
    "temperature": 0.0,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  },
  {
    "opdscreen_bp_id": 12,
    "vn": "611029135701",
    "screen_date": "2018-10-29",
    "screen_time": "14:07:50",
    "staff": "[MASKED_FULLNAME]",
    "bps": 109.0,
    "bpd": 59.0,
    "hos_guid": null,
    "depcode": null,
    "rr": 0,
    "pulse": 78,
    "o2sat": 0,
    "temperature": 35.9,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  },
  {
    "opdscreen_bp_id": 13,
    "vn": "611029141730",
    "screen_date": "2018-10-29",
    "screen_time": "14:23:06",
    "staff": "[MASKED_FULLNAME]",
    "bps": 134.0,
    "bpd": 80.0,
    "hos_guid": null,
    "depcode": null,
    "rr": 0,
    "pulse": 78,
    "o2sat": 0,
    "temperature": 36.8,
    "bfr": null,
    "vp": null,
    "dp": null,
    "ufr": null,
    "vol_remove": null,
    "nursing_care_text": null,
    "opdscreen_bp_loc_type_id": null,
    "opdscreen_bp_ret_type_id": null,
    "etco2": null,
    "news2_score": null,
    "consciousness_level_type_id": null
  }
]
```
