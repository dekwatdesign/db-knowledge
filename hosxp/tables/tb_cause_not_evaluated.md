# `tb_cause_not_evaluated`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_cause_not_evaluated_id | int(11) | NO | PRI | 0 |  |  |
| tb_cause_not_evaluated_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_cause_not_evaluated_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "tb_cause_not_evaluated_id": 1,
    "tb_cause_not_evaluated_name": "เปลี่ยนการวินิจฉัย",
    "hos_guid": null
  },
  {
    "tb_cause_not_evaluated_id": 2,
    "tb_cause_not_evaluated_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
