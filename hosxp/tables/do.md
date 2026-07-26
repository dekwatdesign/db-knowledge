# `do`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| preg_no | tinyint(4) | YES |  | NULL |  |  |
| last_menses_date | date | YES |  | NULL |  |  |
| birth_control_history | text | YES |  | NULL |  |  |
| estimate_delivery_date | date | YES | MUL | NULL |  |  |
| delivery_status | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| delivery_status | delivery_status | no | 1 |
| estimate_delivery_date | estimate_delivery_date | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | anc_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
