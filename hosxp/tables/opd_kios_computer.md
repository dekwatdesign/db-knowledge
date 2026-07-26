# `opd_kios_computer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_kios_computer_id | int(11) | NO | PRI | 0 |  |  |
| opd_kios_computer_name | varchar(200) | YES | UNI | NULL |  |  |
| menu_column | int(11) | YES |  | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| allow_register_new_patient | char(1) | YES |  | NULL |  |  |
| disallow_multiple_visit | char(1) | YES |  | NULL |  |  |
| max_multiple_visit | int(11) | YES |  | NULL |  |  |
| auto_generate_nhso_auth_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_kios_computer_name | opd_kios_computer_name | yes | 1 |
| PRIMARY | opd_kios_computer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
