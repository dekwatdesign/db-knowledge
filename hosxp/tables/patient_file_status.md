# `patient_file_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_file_status_id | int(11) | NO | PRI | 0 |  |  |
| patient_file_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_file_status_name | patient_file_status_name | yes | 1 |
| PRIMARY | patient_file_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "patient_file_status_id": 2,
    "patient_file_status_name": "ถูกนำไปใช้"
  },
  {
    "patient_file_status_id": 4,
    "patient_file_status_name": "ไม่ทราบสถานะ"
  },
  {
    "patient_file_status_id": 3,
    "patient_file_status_name": "สูญหาย"
  },
  {
    "patient_file_status_id": 1,
    "patient_file_status_name": "อยู่ห้องเก็บแฟ้ม"
  }
]
```
