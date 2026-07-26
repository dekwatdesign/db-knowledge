# `hsk_patient_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_type | int(3) | NO | PRI | 0 |  |  |
| patient_name | varchar(200) | YES |  | NULL |  |  |
| patient_st | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_type": 1,
    "patient_name": "[MASKED_FULLNAME]",
    "patient_st": "Y"
  },
  {
    "patient_type": 2,
    "patient_name": "[MASKED_FULLNAME]",
    "patient_st": "Y"
  },
  {
    "patient_type": 3,
    "patient_name": "[MASKED_FULLNAME]",
    "patient_st": "Y"
  }
]
```
