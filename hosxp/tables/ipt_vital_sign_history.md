# `ipt_vital_sign_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_vital_sign_history_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| ipt_vital_sign_history_date | date | YES |  | NULL |  |  |
| ipt_vital_sign_history_time | time | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| nurse_note | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_vital_sign_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
