# `operation_df`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_df_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| operation_position_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| df_rate | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| operation_df_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | operation_id | no | 1 |
| PRIMARY | operation_df_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
