# `drg_reimburse_rate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drg_reimburse_rate_id | int(11) | NO | PRI | 0 |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| pcode | char(2) | YES | MUL | NULL |  |  |
| rate | double(15,3) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| finish_date | date | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pcode | pcode | no | 1 |
| ix_pcode_date | pcode | no | 1 |
| ix_pcode_date | start_date | no | 2 |
| ix_pcode_date | finish_date | no | 3 |
| ix_pcode_date_index | finish_date | no | 1 |
| ix_pcode_date_index | pcode | no | 2 |
| ix_pcode_date_index | start_date | no | 3 |
| PRIMARY | drg_reimburse_rate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
