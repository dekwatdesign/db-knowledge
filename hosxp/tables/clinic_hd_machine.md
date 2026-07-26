# `clinic_hd_machine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_machine_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_machine_name | varchar(200) | YES | UNI | NULL |  |  |
| machine_model_name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_machine_name | clinic_hd_machine_name | yes | 1 |
| PRIMARY | clinic_hd_machine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
