# `patient_consent_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_consent_form_id | int(11) | NO | PRI | 0 |  |  |
| patient_consent_form_name | varchar(255) | YES |  | NULL |  |  |
| reporttemplate_name | varchar(250) | YES | MUL | NULL |  |  |
| scan_type_id | int(11) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| patient_consent_form_specify | char(1) | YES |  | NULL |  |  |
| use_hn | char(1) | YES |  | NULL |  |  |
| use_vn | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_refreporttemplate17 | reporttemplate_name | no | 1 |
| PRIMARY | patient_consent_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
