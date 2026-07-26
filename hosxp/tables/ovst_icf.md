# `ovst_icf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_icf_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| ovst_icf_type_id | int(11) | YES |  | NULL |  |  |
| ovst_icf_level_type_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| icf_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn_unique | vn | yes | 1 |
| PRIMARY | ovst_icf_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_icf_id": 14,
    "vn": "640301060000",
    "ovst_icf_type_id": 14,
    "ovst_icf_level_type_id": null,
    "doctor": "349",
    "entry_datetime": "2021-03-12 15:28:19",
    "hos_guid": null,
    "icf_note": null
  },
  {
    "ovst_icf_id": 15,
    "vn": "640722132302",
    "ovst_icf_type_id": 94,
    "ovst_icf_level_type_id": 3,
    "doctor": "338",
    "entry_datetime": "2021-07-22 13:32:10",
    "hos_guid": null,
    "icf_note": null
  },
  {
    "ovst_icf_id": 16,
    "vn": "640310084734",
    "ovst_icf_type_id": 93,
    "ovst_icf_level_type_id": 2,
    "doctor": "338",
    "entry_datetime": "2021-07-22 13:40:29",
    "hos_guid": null,
    "icf_note": null
  },
  {
    "ovst_icf_id": 17,
    "vn": "640409093008",
    "ovst_icf_type_id": 94,
    "ovst_icf_level_type_id": 4,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:13:52",
    "hos_guid": null,
    "icf_note": null
  },
  {
    "ovst_icf_id": 18,
    "vn": "640629080852",
    "ovst_icf_type_id": 96,
    "ovst_icf_level_type_id": 5,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:16:21",
    "hos_guid": null,
    "icf_note": null
  },
  {
    "ovst_icf_id": 19,
    "vn": "640629082500",
    "ovst_icf_type_id": 6,
    "ovst_icf_level_type_id": 6,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:19:02",
    "hos_guid": null,
    "icf_note": null
  },
  {
    "ovst_icf_id": 20,
    "vn": "640707131857",
    "ovst_icf_type_id": 60,
    "ovst_icf_level_type_id": 4,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:21:23",
    "hos_guid": null,
    "icf_note": null
  },
  {
    "ovst_icf_id": 21,
    "vn": "640503100059",
    "ovst_icf_type_id": 87,
    "ovst_icf_level_type_id": 3,
    "doctor": "272",
    "entry_datetime": "2021-07-22 14:44:30",
    "hos_guid": null,
    "icf_note": null
  }
]
```
