# `sti_patient_lab_gram_stain_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_lab_gram_stain_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_lab_gram_stain_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_patient_lab_gram_stain_type_name | sti_patient_lab_gram_stain_type_name | yes | 1 |
| PRIMARY | sti_patient_lab_gram_stain_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "sti_patient_lab_gram_stain_type_id": 1,
    "sti_patient_lab_gram_stain_type_name": "ปกติ",
    "hos_guid": null
  },
  {
    "sti_patient_lab_gram_stain_type_id": 2,
    "sti_patient_lab_gram_stain_type_name": "ผิดปกติ",
    "hos_guid": null
  }
]
```
