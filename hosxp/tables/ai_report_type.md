# `ai_report_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ai_report_type_id | int(11) | NO | PRI | 0 |  |  |
| ai_report_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ai_report_type_name | ai_report_type_name | yes | 1 |
| PRIMARY | ai_report_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ai_report_type_id": 1,
    "ai_report_type_name": "ผลตรงกับที่อ่าน"
  },
  {
    "ai_report_type_id": 2,
    "ai_report_type_name": "ผลไม่ตรงกับที่อ่าน"
  }
]
```
