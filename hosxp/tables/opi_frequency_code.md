# `opi_frequency_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| frequency_code | varchar(10) | NO | PRI |  |  |  |
| frequency_name | varchar(200) | YES | UNI | NULL |  |  |
| qty_per_day | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| eng_frequency_name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| doctor_use | char(1) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| med_interval_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_frequency_name | frequency_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | frequency_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "frequency_code": "19",
    "frequency_name": "เวลา 19.00 น.",
    "qty_per_day": 1.0,
    "hos_guid": "{87955F78-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  },
  {
    "frequency_code": "20",
    "frequency_name": "เวลา 20.00 น.",
    "qty_per_day": 1.0,
    "hos_guid": "{8795637A-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  },
  {
    "frequency_code": "21",
    "frequency_name": "เวลา 21.00 น.",
    "qty_per_day": 1.0,
    "hos_guid": "{87956625-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  },
  {
    "frequency_code": "3W",
    "frequency_name": "สัปดาห์ละ 3 ครั้ง",
    "qty_per_day": 0.0,
    "hos_guid": "{879568C0-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  },
  {
    "frequency_code": "618",
    "frequency_name": "เวลา 6.00 และ18.00 น.",
    "qty_per_day": 0.0,
    "hos_guid": "{87956B61-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  },
  {
    "frequency_code": "7",
    "frequency_name": "เวลา 7.00 น.",
    "qty_per_day": 0.0,
    "hos_guid": "{87956E0B-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  },
  {
    "frequency_code": "719",
    "frequency_name": "เวลา 7.00 และ 19.00 น.",
    "qty_per_day": 0.0,
    "hos_guid": "{879570CA-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  },
  {
    "frequency_code": "730",
    "frequency_name": "เวลา 7.30 และ 19.30 น.",
    "qty_per_day": 0.0,
    "hos_guid": "{87957370-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_frequency_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "med_interval_type_id": null
  }
]
```
