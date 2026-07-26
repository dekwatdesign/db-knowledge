# `hhc_discharge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hhc_discharge_type_id | int(11) | NO | PRI | 0 |  |  |
| hhc_discharge_type_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hhc_discharge_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "hhc_discharge_type_id": 1,
    "hhc_discharge_type_name": "ย้ายที่อยู่",
    "hos_guid": null
  },
  {
    "hhc_discharge_type_id": 2,
    "hhc_discharge_type_name": "เสียชีวิตทีนี้",
    "hos_guid": null
  },
  {
    "hhc_discharge_type_id": 3,
    "hhc_discharge_type_name": "เสียชีวิตทอื่น",
    "hos_guid": null
  },
  {
    "hhc_discharge_type_id": 4,
    "hhc_discharge_type_name": "สาบสูญ",
    "hos_guid": null
  }
]
```
