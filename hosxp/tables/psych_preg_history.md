# `psych_preg_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_preg_history_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psych_preg_history_date | date | YES |  | NULL |  |  |
| psych_preg_history_no | int(11) | YES |  | NULL |  |  |
| psych_preg_history_doctor | varchar(7) | YES |  | NULL |  |  |
| psych_preg_type_id | int(11) | YES |  | NULL |  |  |
| psych_preg_type_note | varchar(255) | YES |  | NULL |  |  |
| psych_labour_type_id | int(11) | YES |  | NULL |  |  |
| psych_labour_type_note | varchar(255) | YES |  | NULL |  |  |
| psych_labour_meth_type_id | int(11) | YES |  | NULL |  |  |
| psych_labour_meth_type_note | varchar(255) | YES |  | NULL |  |  |
| psych_baby_health_type_id | int(11) | YES |  | NULL |  |  |
| psych_baby_health_type_note | varchar(255) | YES |  | NULL |  |  |
| psych_preg_history_birth_bw | int(11) | YES |  | NULL |  |  |
| psych_preg_history_note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | psych_preg_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
