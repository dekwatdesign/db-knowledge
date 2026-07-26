# `opd_kios_dep_menu_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_kios_dep_menu_print_id | int(11) | NO | PRI | 0 |  |  |
| opd_kios_dep_menu_id | int(11) | YES | MUL | NULL |  |  |
| report_name | varchar(200) | YES |  | NULL |  |  |
| printer_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | opd_kios_dep_menu_id | no | 1 |
| PRIMARY | opd_kios_dep_menu_print_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
