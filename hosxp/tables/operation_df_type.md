# `operation_df_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_df_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_df_type_name | varchar(200) | YES | UNI | NULL |  |  |
| df_rate | double(15,3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_df_type_name | operation_df_type_name | yes | 1 |
| PRIMARY | operation_df_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
