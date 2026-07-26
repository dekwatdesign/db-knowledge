# `anc_location_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_location_type_id | int(11) | NO | PRI | 0 |  |  |
| anc_location_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_location_type_name | anc_location_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_location_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "anc_location_type_id": 1,
    "anc_location_type_name": "ที่นี่",
    "hos_guid": null
  },
  {
    "anc_location_type_id": 2,
    "anc_location_type_name": "ที่อื่น",
    "hos_guid": null
  }
]
```
