# `doctor_deformed_cert_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_cert_result_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_cert_id | int(11) | YES | MUL | NULL |  |  |
| doctor_deformed_topic_id | int(11) | YES |  | NULL |  |  |
| result_normal | char(1) | YES |  | NULL |  |  |
| doctor_deformed_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | doctor_deformed_cert_id | no | 1 |
| PRIMARY | doctor_deformed_cert_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "doctor_deformed_cert_result_id": 1,
    "doctor_deformed_cert_id": 1,
    "doctor_deformed_topic_id": 9,
    "result_normal": "Y",
    "doctor_deformed_type_id": 4
  },
  {
    "doctor_deformed_cert_result_id": 3,
    "doctor_deformed_cert_id": 3,
    "doctor_deformed_topic_id": 9,
    "result_normal": "Y",
    "doctor_deformed_type_id": 4
  }
]
```
