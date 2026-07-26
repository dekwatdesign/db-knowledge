# `rcpt_deposit_trans_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_deposit_trans_detail_id | int(11) | NO | PRI | 0 |  |  |
| rcpt_deposit_trans_head_id | int(11) | YES | MUL | NULL |  |  |
| patient_finance_deposit_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_head_id | rcpt_deposit_trans_head_id | no | 1 |
| PRIMARY | rcpt_deposit_trans_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
