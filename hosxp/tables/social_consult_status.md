# `social_consult_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_consult_status_id | int(11) | NO | PRI | 0 |  |  |
| social_consult_status_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | social_consult_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "social_consult_status_id": 1,
    "social_consult_status_name": "รอรับเรื่อง"
  },
  {
    "social_consult_status_id": 2,
    "social_consult_status_name": "กำลังรักษา"
  },
  {
    "social_consult_status_id": 3,
    "social_consult_status_name": "สิ้นสุดการรักษา"
  }
]
```
