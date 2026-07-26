# `rvp_victim_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_victim_type_id | int(11) | NO | PRI | 0 |  |  |
| rvp_victim_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rvp_victim_type_name | rvp_victim_type_name | yes | 1 |
| PRIMARY | rvp_victim_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "rvp_victim_type_id": 1,
    "rvp_victim_type_name": "ผู้ขับขี่",
    "hos_guid": null
  },
  {
    "rvp_victim_type_id": 2,
    "rvp_victim_type_name": "บุคคลภายนอกรถ",
    "hos_guid": null
  },
  {
    "rvp_victim_type_id": 3,
    "rvp_victim_type_name": "ผู้โดยสาร",
    "hos_guid": null
  }
]
```
