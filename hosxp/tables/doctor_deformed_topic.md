# `doctor_deformed_topic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_topic_id | int(11) | NO | PRI | 0 |  |  |
| doctor_deformed_type_id | int(11) | YES |  | NULL |  |  |
| doctor_deformed_topic_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doctor_deformed_topic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_deformed_topic_id": 1,
    "doctor_deformed_type_id": 1,
    "doctor_deformed_topic_name": "การเห็นของสายตา"
  },
  {
    "doctor_deformed_topic_id": 2,
    "doctor_deformed_type_id": 1,
    "doctor_deformed_topic_name": "ลานสายตา"
  },
  {
    "doctor_deformed_topic_id": 3,
    "doctor_deformed_type_id": 2,
    "doctor_deformed_topic_name": "การได้ยินเสียง"
  },
  {
    "doctor_deformed_topic_id": 4,
    "doctor_deformed_type_id": 2,
    "doctor_deformed_topic_name": "การเข้าใจภาษาพูด"
  },
  {
    "doctor_deformed_topic_id": 5,
    "doctor_deformed_type_id": 2,
    "doctor_deformed_topic_name": "การใช้ภาษาพูด"
  },
  {
    "doctor_deformed_topic_id": 6,
    "doctor_deformed_type_id": 3,
    "doctor_deformed_topic_name": "การเคลื่อนไหว มือ แขน ขา หรือเท้า"
  },
  {
    "doctor_deformed_topic_id": 7,
    "doctor_deformed_type_id": 3,
    "doctor_deformed_topic_name": "ลักษณะทั่วไปของร่างกาย"
  },
  {
    "doctor_deformed_topic_id": 8,
    "doctor_deformed_type_id": 4,
    "doctor_deformed_topic_name": "สภาวะทางจิต หรือพฤติกรรม"
  }
]
```
