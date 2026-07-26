# `lab_patho_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_list_id | int(11) | NO | PRI | 0 |  |  |
| lab_patho_id | int(11) | YES | MUL | NULL |  |  |
| lab_patho_list_name | varchar(200) | YES |  | NULL |  |  |
| lab_patho_list_value | varchar(100) | YES |  | NULL |  |  |
| lab_patho_list_desc | varchar(250) | YES |  | NULL |  |  |
| lab_patho_list_group_name | varchar(100) | YES |  | NULL |  |  |
| component_class | varchar(100) | YES |  | NULL |  |  |
| component_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | lab_patho_id | no | 1 |
| PRIMARY | lab_patho_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
