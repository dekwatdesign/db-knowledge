# `doctor_deformed_cert_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_cert_detail_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_cert_result_id | int(11) | YES | MUL | NULL |  |  |
| doctor_deformed_abnormal_id | int(11) | YES |  | NULL |  |  |
| doctor_deformed_ab_type_id | int(11) | YES |  | NULL |  |  |
| doctor_deformed_ab_text | text | YES |  | NULL |  |  |
| ab_year | int(11) | YES |  | NULL |  |  |
| ab_month | int(11) | YES |  | NULL |  |  |
| doctor_deformed_cause_id | int(11) | YES |  | NULL |  |  |
| doctor_deformed_cause_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | doctor_deformed_cert_result_id | no | 1 |
| PRIMARY | doctor_deformed_cert_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "doctor_deformed_cert_detail_id": 1,
    "doctor_deformed_cert_result_id": 1,
    "doctor_deformed_abnormal_id": null,
    "doctor_deformed_ab_type_id": 1,
    "doctor_deformed_ab_text": null,
    "ab_year": 1,
    "ab_month": 0,
    "doctor_deformed_cause_id": 5,
    "doctor_deformed_cause_text": null
  },
  {
    "doctor_deformed_cert_detail_id": 3,
    "doctor_deformed_cert_result_id": 3,
    "doctor_deformed_abnormal_id": null,
    "doctor_deformed_ab_type_id": 1,
    "doctor_deformed_ab_text": "ทดลองออกใบรับรองผู้พิการ",
    "ab_year": 4,
    "ab_month": null,
    "doctor_deformed_cause_id": 4,
    "doctor_deformed_cause_text": "ทดลองออกใบรับรองผู้พิการ"
  }
]
```
