# `rvp_accident_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_accident_type_id | int(11) | NO | PRI | 0 |  |  |
| rvp_accident_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rvp_accident_type_name | rvp_accident_type_name | yes | 1 |
| PRIMARY | rvp_accident_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rvp_accident_type_id": 1,
    "rvp_accident_type_name": "รถคันเดียวไม่มีคู่กรณี",
    "hos_guid": null
  },
  {
    "rvp_accident_type_id": 2,
    "rvp_accident_type_name": "รถคันเอาประกันภัยชนกับรถคันอื่น",
    "hos_guid": null
  }
]
```
