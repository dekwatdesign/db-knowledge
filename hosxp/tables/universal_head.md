# `universal_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_head_id | int(11) | NO | PRI | 0 |  |  |
| entry_date | date | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| universal_form_id | int(11) | YES |  | NULL |  |  |
| entry_time | time | YES |  | NULL |  |  |
| key_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| link_data_text | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_key_id | key_id | no | 1 |
| PRIMARY | universal_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_head_id": 191,
    "entry_date": "2011-10-10",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001698",
    "vn": "541010095553",
    "universal_form_id": 8,
    "entry_time": "17:35:33",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  },
  {
    "universal_head_id": 217,
    "entry_date": "2011-10-10",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001698",
    "vn": "541010095553",
    "universal_form_id": 9,
    "entry_time": "17:39:02",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  },
  {
    "universal_head_id": 218,
    "entry_date": "2011-10-10",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001704",
    "vn": "541010114943",
    "universal_form_id": 8,
    "entry_time": "17:44:19",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  },
  {
    "universal_head_id": 244,
    "entry_date": "2011-10-10",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001704",
    "vn": "541010114943",
    "universal_form_id": 9,
    "entry_time": "17:44:37",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  },
  {
    "universal_head_id": 270,
    "entry_date": "2011-10-10",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001698",
    "vn": "541010095553",
    "universal_form_id": 11,
    "entry_time": "17:42:17",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  },
  {
    "universal_head_id": 296,
    "entry_date": "2011-10-10",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001704",
    "vn": "541010114943",
    "universal_form_id": 11,
    "entry_time": "17:42:37",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  },
  {
    "universal_head_id": 351,
    "entry_date": "2011-10-11",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001699",
    "vn": "541010102530",
    "universal_form_id": 8,
    "entry_time": "17:10:02",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  },
  {
    "universal_head_id": 377,
    "entry_date": "2011-10-11",
    "staff": "[MASKED_FULLNAME]",
    "hn": "540001699",
    "vn": "541010102530",
    "universal_form_id": 9,
    "entry_time": "17:11:26",
    "key_id": 0,
    "hos_guid": null,
    "link_data_text": ""
  }
]
```
