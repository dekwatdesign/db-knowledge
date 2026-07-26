# `std_approve_link`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| std_approve_link_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| table_name | varchar(50) | YES | MUL | NULL |  |  |
| table_key_id | int(11) | YES | MUL | NULL |  |  |
| approve_ok | char(1) | YES |  | NULL |  |  |
| approve_doctor_list | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_table_name | table_name | no | 1 |
| ix_vn_table_name | vn | no | 2 |
| ix_vn_table_name_key | table_key_id | no | 1 |
| ix_vn_table_name_key | table_name | no | 2 |
| ix_vn_table_name_key | vn | no | 3 |
| PRIMARY | std_approve_link_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
