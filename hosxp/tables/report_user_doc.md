# `report_user_doc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_user_doc_id | int(11) | NO | PRI | 0 |  |  |
| login_name | varchar(50) | YES | MUL | NULL |  |  |
| module_name | varchar(200) | YES |  | NULL |  |  |
| report_name | varchar(200) | YES |  | NULL |  |  |
| printer_name | varchar(200) | YES |  | NULL |  |  |
| confirm_print | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_login | login_name | no | 1 |
| ix_login_module | login_name | no | 1 |
| ix_login_module | module_name | no | 2 |
| ix_login_module_uni | login_name | yes | 1 |
| ix_login_module_uni | module_name | yes | 2 |
| ix_login_module_uni | report_name | yes | 3 |
| PRIMARY | report_user_doc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
