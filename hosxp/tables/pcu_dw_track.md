# `pcu_dw_track`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pcu_dw_track_id | int(11) | NO | PRI | 0 |  |  |
| table_name | varchar(50) | YES | MUL | NULL |  |  |
| modify_type | varchar(15) | YES |  | NULL |  |  |
| key_value | varchar(150) | YES |  | NULL |  |  |
| key_field | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_table_name | table_name | no | 1 |
| PRIMARY | pcu_dw_track_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pcu_dw_track_id": 1,
    "table_name": "oapp",
    "modify_type": "update",
    "key_value": "30549",
    "key_field": "oapp_id",
    "hos_guid": ""
  },
  {
    "pcu_dw_track_id": 2,
    "table_name": "person",
    "modify_type": "insert",
    "key_value": "2",
    "key_field": "person_id",
    "hos_guid": null
  },
  {
    "pcu_dw_track_id": 3,
    "table_name": "person",
    "modify_type": "insert",
    "key_value": "3",
    "key_field": "person_id",
    "hos_guid": null
  },
  {
    "pcu_dw_track_id": 4,
    "table_name": "person",
    "modify_type": "insert",
    "key_value": "4",
    "key_field": "person_id",
    "hos_guid": null
  },
  {
    "pcu_dw_track_id": 5,
    "table_name": "person",
    "modify_type": "insert",
    "key_value": "5",
    "key_field": "person_id",
    "hos_guid": null
  },
  {
    "pcu_dw_track_id": 6,
    "table_name": "person",
    "modify_type": "insert",
    "key_value": "6",
    "key_field": "person_id",
    "hos_guid": null
  },
  {
    "pcu_dw_track_id": 7,
    "table_name": "person",
    "modify_type": "insert",
    "key_value": "7",
    "key_field": "person_id",
    "hos_guid": null
  },
  {
    "pcu_dw_track_id": 8,
    "table_name": "person",
    "modify_type": "insert",
    "key_value": "8",
    "key_field": "person_id",
    "hos_guid": null
  }
]
```
