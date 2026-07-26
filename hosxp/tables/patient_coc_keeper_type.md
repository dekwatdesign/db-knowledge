# `patient_coc_keeper_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_keeper_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_keeper_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_coc_keeper_type_name | patient_coc_keeper_type_name | yes | 1 |
| PRIMARY | patient_coc_keeper_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "patient_coc_keeper_type_id": 1,
    "patient_coc_keeper_type_name": "บิดา"
  },
  {
    "patient_coc_keeper_type_id": 2,
    "patient_coc_keeper_type_name": "มารดา"
  },
  {
    "patient_coc_keeper_type_id": 3,
    "patient_coc_keeper_type_name": "สามี"
  },
  {
    "patient_coc_keeper_type_id": 4,
    "patient_coc_keeper_type_name": "ภรรยา"
  },
  {
    "patient_coc_keeper_type_id": 5,
    "patient_coc_keeper_type_name": "บุตร"
  },
  {
    "patient_coc_keeper_type_id": 6,
    "patient_coc_keeper_type_name": "ญาติ"
  },
  {
    "patient_coc_keeper_type_id": 9,
    "patient_coc_keeper_type_name": "อื่นๆ"
  }
]
```
