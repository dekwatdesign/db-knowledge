# `ipd_nurse_eval_entry`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_eval_entry_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| entry_date | date | YES | MUL | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_date_shift | an | no | 1 |
| ix_an_date_shift | entry_date | no | 2 |
| ix_an_date_shift | ipd_nurse_shift_id | no | 3 |
| ix_an_date_shift_index | entry_date | no | 1 |
| ix_an_date_shift_index | ipd_nurse_shift_id | no | 2 |
| ix_an_date_shift_index | an | no | 3 |
| PRIMARY | ipd_nurse_eval_entry_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
