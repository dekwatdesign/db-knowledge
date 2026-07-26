# `consciousness_level_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| consciousness_level_type_id | int(11) | NO | PRI | 0 |  |  |
| consciousness_level_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_consciousness_level_type_name | consciousness_level_type_name | yes | 1 |
| PRIMARY | consciousness_level_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "consciousness_level_type_id": 1,
    "consciousness_level_type_name": "รู้สึกตัวดี (A)"
  },
  {
    "consciousness_level_type_id": 2,
    "consciousness_level_type_name": "สนองต่อเสียงเรียกหรือคำพูด (V)"
  },
  {
    "consciousness_level_type_id": 3,
    "consciousness_level_type_name": "ตอบสนองต่อความเจ็บปวด (P)"
  },
  {
    "consciousness_level_type_id": 4,
    "consciousness_level_type_name": "หมดสติปลุกไม่ตื่น ไม่ตอบสนองต่อการกระตุ้น (U)"
  }
]
```
