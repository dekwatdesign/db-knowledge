# `elder_relation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_relation_id | int(11) | NO | PRI | 0 |  |  |
| elder_relation_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_relation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "elder_relation_id": 1,
    "elder_relation_name": "คนเดียว",
    "hos_guid": null
  },
  {
    "elder_relation_id": 2,
    "elder_relation_name": "ลำพังกับคู่สมรส",
    "hos_guid": null
  },
  {
    "elder_relation_id": 3,
    "elder_relation_name": "อยู่กับญาติ",
    "hos_guid": null
  },
  {
    "elder_relation_id": 4,
    "elder_relation_name": "อยู่กับลูกหลาน",
    "hos_guid": null
  },
  {
    "elder_relation_id": 5,
    "elder_relation_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
