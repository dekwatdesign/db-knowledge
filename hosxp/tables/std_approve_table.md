# `std_approve_table`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| std_approve_table_id | int(11) | NO | PRI | 0 |  |  |
| std_approve_list_id | int(11) | YES | MUL | NULL |  |  |
| table_name | varchar(150) | YES |  | NULL |  |  |
| table_key_id | int(11) | YES |  | NULL |  |  |
| approve_ok | char(1) | YES |  | NULL |  |  |
| instr_doctor_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_appid | std_approve_list_id | no | 1 |
| ix_search | std_approve_list_id | no | 1 |
| ix_search | table_name | no | 2 |
| ix_search | table_key_id | no | 3 |
| ix_search_index | std_approve_list_id | no | 1 |
| ix_search_index | table_key_id | no | 2 |
| ix_search_index | table_name | no | 3 |
| PRIMARY | std_approve_table_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
