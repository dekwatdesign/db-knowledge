# `ovst_community_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_community_service_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| ovst_community_service_type_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| service_note_text | text | YES |  | NULL |  |  |
| ovst_community_service_type_code | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_community_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_community_service_id": 5,
    "vn": "610517085720",
    "ovst_community_service_type_id": 67,
    "doctor": "185",
    "entry_datetime": "2018-07-04 11:09:05",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  },
  {
    "ovst_community_service_id": 6,
    "vn": "610604115633",
    "ovst_community_service_type_id": 70,
    "doctor": "185",
    "entry_datetime": "2018-07-04 12:11:50",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  },
  {
    "ovst_community_service_id": 7,
    "vn": "610706100730",
    "ovst_community_service_type_id": 67,
    "doctor": "185",
    "entry_datetime": "2018-07-06 10:08:43",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  },
  {
    "ovst_community_service_id": 8,
    "vn": "610710153352",
    "ovst_community_service_type_id": 67,
    "doctor": "081",
    "entry_datetime": "2018-07-10 15:35:51",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  },
  {
    "ovst_community_service_id": 9,
    "vn": "610712143017",
    "ovst_community_service_type_id": 67,
    "doctor": "081",
    "entry_datetime": "2018-07-12 14:33:06",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  },
  {
    "ovst_community_service_id": 10,
    "vn": "610905142040",
    "ovst_community_service_type_id": 67,
    "doctor": "336",
    "entry_datetime": "2018-09-05 14:23:57",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  },
  {
    "ovst_community_service_id": 11,
    "vn": "610905142443",
    "ovst_community_service_type_id": 67,
    "doctor": "185",
    "entry_datetime": "2018-09-05 14:26:49",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  },
  {
    "ovst_community_service_id": 12,
    "vn": "610905142728",
    "ovst_community_service_type_id": 67,
    "doctor": "336",
    "entry_datetime": "2018-09-05 14:28:12",
    "hos_guid": null,
    "service_note_text": null,
    "ovst_community_service_type_code": null
  }
]
```
