# `patient_cancer_head_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_head_image_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_head_id | int(11) | YES |  | NULL |  |  |
| picture_no1 | longblob | YES |  | NULL |  |  |
| picture_no2 | longblob | YES |  | NULL |  |  |
| picture_note | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_head_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
