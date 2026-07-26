# `patient_hhc_app_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_app_status_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_app_status_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_app_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "patient_hhc_app_status_id": 3,
    "patient_hhc_app_status_name": "ปฏิเสธเคส"
  },
  {
    "patient_hhc_app_status_id": 4,
    "patient_hhc_app_status_name": "เยี่ยมแล้ว"
  },
  {
    "patient_hhc_app_status_id": 1,
    "patient_hhc_app_status_name": "รอรับทราบ"
  },
  {
    "patient_hhc_app_status_id": 2,
    "patient_hhc_app_status_name": "รอเยี่ยม"
  }
]
```
