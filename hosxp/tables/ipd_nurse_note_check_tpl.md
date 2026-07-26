# `ipd_nurse_note_check_tpl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_note_check_tpl_id | int(11) | NO | PRI | 0 |  |  |
| nurse_module_name | varchar(100) | YES | MUL | NULL |  |  |
| tpl_name | varchar(200) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nurse_module_name | nurse_module_name | no | 1 |
| ix_uni | nurse_module_name | yes | 1 |
| ix_uni | tpl_name | yes | 2 |
| PRIMARY | ipd_nurse_note_check_tpl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
