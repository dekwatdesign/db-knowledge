# `clinic_hd_dialyzer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_dialyzer_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_dialyzer_name | varchar(200) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| surface_area | double(15,3) | YES |  | NULL |  |  |
| use_count | int(11) | YES |  | NULL |  |  |
| last_tcv | double(15,3) | YES |  | NULL |  |  |
| model_name | varchar(50) | YES |  | NULL |  |  |
| first_date | date | YES |  | NULL |  |  |
| membrane_type_id | int(11) | YES |  | NULL |  |  |
| dialyzer_type_id | int(11) | YES |  | NULL |  |  |
| max_use_count | int(11) | YES |  | NULL |  |  |
| start_use_count | int(11) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_dialyzer_name | clinic_hd_dialyzer_name | yes | 1 |
| ix_hn | hn | no | 1 |
| PRIMARY | clinic_hd_dialyzer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
