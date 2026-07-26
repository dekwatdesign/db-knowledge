# `dis_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| dis_evaluate_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_evaluate_name | dis_evaluate_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dis_evaluate_id": 1,
    "dis_evaluate_name": "ครบ",
    "hos_guid": null
  },
  {
    "dis_evaluate_id": 2,
    "dis_evaluate_name": "ไม่ครบ",
    "hos_guid": null
  },
  {
    "dis_evaluate_id": 3,
    "dis_evaluate_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
