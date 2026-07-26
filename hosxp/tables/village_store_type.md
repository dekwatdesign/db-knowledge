# `village_store_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_store_type_id | int(11) | NO | PRI | 0 |  |  |
| village_store_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_store_type_name | village_store_type_name | yes | 1 |
| PRIMARY | village_store_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "village_store_type_id": 1,
    "village_store_type_name": "ร้านค้าหรือร้านขายของชำ",
    "hos_guid": null
  },
  {
    "village_store_type_id": 2,
    "village_store_type_name": "ร้านอาหาร",
    "hos_guid": null
  },
  {
    "village_store_type_id": 3,
    "village_store_type_name": "ตลาดสด",
    "hos_guid": null
  },
  {
    "village_store_type_id": 4,
    "village_store_type_name": "แผงลอย",
    "hos_guid": null
  },
  {
    "village_store_type_id": 5,
    "village_store_type_name": "ร้านขายยา",
    "hos_guid": null
  }
]
```
