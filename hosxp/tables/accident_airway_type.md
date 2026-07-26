# `accident_airway_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_airway_type_id | int(11) | NO | PRI | 0 |  |  |
| accident_airway_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_accident_airway_type_name | accident_airway_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | accident_airway_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "accident_airway_type_id": 1,
    "accident_airway_type_name": "มีการดูแลการหายใจก่อนมาถึง",
    "hos_guid": null
  },
  {
    "accident_airway_type_id": 2,
    "accident_airway_type_name": "ไม่มีการดูแลการหายใจก่อนมาถึง",
    "hos_guid": null
  },
  {
    "accident_airway_type_id": 3,
    "accident_airway_type_name": "ไม่จำเป็น",
    "hos_guid": null
  }
]
```
