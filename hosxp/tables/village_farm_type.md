# `village_farm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_farm_type_id | int(11) | NO | PRI | 0 |  |  |
| village_farm_type_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_farm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "village_farm_type_id": 1,
    "village_farm_type_name": "ฟาร์มสัตว์ปีก",
    "hos_guid": null
  },
  {
    "village_farm_type_id": 2,
    "village_farm_type_name": "ฟาร์มสุกร",
    "hos_guid": null
  }
]
```
