# `patient_cancer_patho_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_patho_image_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| picture_blob | longblob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_patho_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
