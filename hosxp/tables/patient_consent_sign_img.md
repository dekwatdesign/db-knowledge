# `patient_consent_sign_img`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_consent_sign_img_id | int(11) | NO | PRI | 0 |  |  |
| image_blob | longblob | YES |  | NULL |  |  |
| image_width | float | YES |  | NULL |  |  |
| image_height | float | YES |  | NULL |  |  |
| image_datatime | datetime | YES |  | NULL |  |  |
| signature_name | varchar(150) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| patient_consent_id | int(11) | YES | MUL | NULL |  |  |
| patient_consent_sign_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_refpatient_consent7 | patient_consent_id | no | 1 |
| ix_refpatient_consent_sign11 | patient_consent_sign_id | no | 1 |
| PRIMARY | patient_consent_sign_img_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
