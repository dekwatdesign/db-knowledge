# `depcode_fee_schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode_fee_schedule_id | int(11) | NO | PRI | 0 |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| nhso_fee_schedule_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| ix_depcode_nhso_fee_schedule_type_id | depcode | yes | 1 |
| ix_depcode_nhso_fee_schedule_type_id | nhso_fee_schedule_type_id | yes | 2 |
| PRIMARY | depcode_fee_schedule_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
