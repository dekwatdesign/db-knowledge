# `pp_special`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pp_special_type_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
| pp_special_service_place_type_id | int(11) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| dest_hospcode | varchar(9) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| pp_special_text | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pp_special_code | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | pp_special_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "pp_special_id": 23,
    "vn": "690211060000",
    "pp_special_type_id": 213,
    "doctor": "270",
    "pp_special_service_place_type_id": null,
    "entry_datetime": "2026-02-11 15:03:56",
    "dest_hospcode": "12251",
    "hos_guid": null,
    "pp_special_text": null,
    "hn": "600000615",
    "pp_special_code": null
  },
  {
    "pp_special_id": 28,
    "vn": "000000000000",
    "pp_special_type_id": 40,
    "doctor": "187",
    "pp_special_service_place_type_id": 1,
    "entry_datetime": "2026-02-17 10:31:53",
    "dest_hospcode": "12251",
    "hos_guid": null,
    "pp_special_text": null,
    "hn": "530178147",
    "pp_special_code": null
  },
  {
    "pp_special_id": 29,
    "vn": "000000000000",
    "pp_special_type_id": 40,
    "doctor": "187",
    "pp_special_service_place_type_id": 1,
    "entry_datetime": "2026-02-17 10:32:48",
    "dest_hospcode": "12251",
    "hos_guid": null,
    "pp_special_text": null,
    "hn": "530178147",
    "pp_special_code": null
  },
  {
    "pp_special_id": 30,
    "vn": "000000000000",
    "pp_special_type_id": 40,
    "doctor": "187",
    "pp_special_service_place_type_id": 2,
    "entry_datetime": "2026-02-17 10:33:46",
    "dest_hospcode": "12251",
    "hos_guid": null,
    "pp_special_text": null,
    "hn": "530178147",
    "pp_special_code": null
  },
  {
    "pp_special_id": 41,
    "vn": "690219070555",
    "pp_special_type_id": 40,
    "doctor": "360",
    "pp_special_service_place_type_id": 1,
    "entry_datetime": "2026-02-19 09:37:28",
    "dest_hospcode": "12251",
    "hos_guid": null,
    "pp_special_text": null,
    "hn": "690000109",
    "pp_special_code": null
  }
]
```
