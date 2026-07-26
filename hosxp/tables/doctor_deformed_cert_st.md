# `doctor_deformed_cert_st`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_cert_st_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_cert_id | int(11) | YES | MUL | NULL |  |  |
| doctor_deformed_status_id | int(11) | YES |  | NULL |  |  |
| st_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | doctor_deformed_cert_id | no | 1 |
| PRIMARY | doctor_deformed_cert_st_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "doctor_deformed_cert_st_id": 1,
    "doctor_deformed_cert_id": 1,
    "doctor_deformed_status_id": 6,
    "st_note": "ทดสอบ"
  },
  {
    "doctor_deformed_cert_st_id": 2,
    "doctor_deformed_cert_id": 3,
    "doctor_deformed_status_id": 1,
    "st_note": "ทดลองออกใบรับรองผู้พิการ"
  }
]
```
