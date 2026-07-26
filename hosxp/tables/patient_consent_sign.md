# `patient_consent_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_consent_sign_id | int(11) | NO | PRI | 0 |  |  |
| patient_consent_sign_type_id | int(11) | YES | MUL | NULL |  |  |
| patient_consent_form_id | int(11) | YES | MUL | NULL |  |  |
| patient_consent_sign_specify | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_refpatient_consent_form18 | patient_consent_form_id | no | 1 |
| ix_refpatient_consent_sign_type12 | patient_consent_sign_type_id | no | 1 |
| PRIMARY | patient_consent_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
