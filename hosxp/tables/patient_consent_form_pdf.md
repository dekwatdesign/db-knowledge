# `patient_consent_form_pdf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_consent_form_pdf_id | int(11) | NO | PRI | 0 |  |  |
| patient_consent_form_id | int(11) | YES | MUL | NULL |  |  |
| pdf_file | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_consent_form_id | patient_consent_form_id | no | 1 |
| PRIMARY | patient_consent_form_pdf_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
