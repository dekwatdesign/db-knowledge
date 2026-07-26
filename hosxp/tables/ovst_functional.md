# `ovst_functional`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_functional_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| ovst_functional_type_id | int(11) | YES |  | NULL |  |  |
| ovst_functional_score | int(11) | YES |  | NULL |  |  |
| ovst_functional_dependent_type_id | int(11) | YES |  | NULL |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| functional_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | ovst_functional_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_functional_id": 15,
    "vn": "640722132302",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": 44,
    "ovst_functional_dependent_type_id": null,
    "doctor": "338",
    "entry_datetime": "2021-07-22 13:32:10",
    "hos_guid": null,
    "functional_note_text": null
  },
  {
    "ovst_functional_id": 16,
    "vn": "640310084734",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": 20,
    "ovst_functional_dependent_type_id": null,
    "doctor": "338",
    "entry_datetime": "2021-07-22 13:40:29",
    "hos_guid": null,
    "functional_note_text": null
  },
  {
    "ovst_functional_id": 17,
    "vn": "640409093008",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": 49,
    "ovst_functional_dependent_type_id": null,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:13:52",
    "hos_guid": null,
    "functional_note_text": null
  },
  {
    "ovst_functional_id": 18,
    "vn": "640629080852",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": 98,
    "ovst_functional_dependent_type_id": null,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:16:21",
    "hos_guid": null,
    "functional_note_text": null
  },
  {
    "ovst_functional_id": 19,
    "vn": "640629082500",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": null,
    "ovst_functional_dependent_type_id": null,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:19:02",
    "hos_guid": null,
    "functional_note_text": null
  },
  {
    "ovst_functional_id": 20,
    "vn": "640707131857",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": 95,
    "ovst_functional_dependent_type_id": null,
    "doctor": "338",
    "entry_datetime": "2021-07-22 14:21:23",
    "hos_guid": null,
    "functional_note_text": null
  },
  {
    "ovst_functional_id": 21,
    "vn": "640503100059",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": 49,
    "ovst_functional_dependent_type_id": null,
    "doctor": "272",
    "entry_datetime": "2021-07-22 14:44:30",
    "hos_guid": null,
    "functional_note_text": null
  },
  {
    "ovst_functional_id": 22,
    "vn": "640702095709",
    "ovst_functional_type_id": 3,
    "ovst_functional_score": 69,
    "ovst_functional_dependent_type_id": null,
    "doctor": "338",
    "entry_datetime": "2021-07-27 14:09:58",
    "hos_guid": null,
    "functional_note_text": null
  }
]
```
