# `xray_ai_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_ai_type_id | int(11) | NO | PRI | 0 |  |  |
| xray_ai_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xray_ai_type_name | xray_ai_type_name | yes | 1 |
| PRIMARY | xray_ai_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "xray_ai_type_id": 1,
    "xray_ai_type_name": "Chest PA"
  },
  {
    "xray_ai_type_id": 99,
    "xray_ai_type_name": "ไม่เปิดใช้งาน"
  }
]
```
