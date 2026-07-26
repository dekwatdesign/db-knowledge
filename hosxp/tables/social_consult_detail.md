# `social_consult_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_consult_detail_id | int(11) | NO | PRI | 0 |  |  |
| social_consult_detail_staff | varchar(250) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| social_consult_list_id | int(11) | YES |  | NULL |  |  |
| social_consult_status_id | int(11) | YES |  | NULL |  |  |
| social_reason_consult_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | social_consult_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "social_consult_detail_id": 1,
    "social_consult_detail_staff": "[MASKED_FULLNAME]",
    "last_update": "2024-12-24 16:12:57",
    "social_consult_list_id": 1,
    "social_consult_status_id": 1,
    "social_reason_consult_id": 4,
    "doctor_code": "187"
  }
]
```
