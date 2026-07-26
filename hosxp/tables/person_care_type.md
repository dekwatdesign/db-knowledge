# `person_care_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_care_type_id | int(11) | NO | PRI | 0 |  |  |
| person_care_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_care_type_name | person_care_type_name | yes | 1 |
| PRIMARY | person_care_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "person_care_type_id": 1,
    "person_care_type_name": "โรคไม่ติดต่อเรื้อรัง"
  },
  {
    "person_care_type_id": 2,
    "person_care_type_name": "จิตเวชและสารเสพติด"
  },
  {
    "person_care_type_id": 3,
    "person_care_type_name": "การดูแลแบบประคับประคอง"
  },
  {
    "person_care_type_id": 4,
    "person_care_type_name": "ผู้พิการ"
  },
  {
    "person_care_type_id": 5,
    "person_care_type_name": "ผู้สูงอายุ"
  },
  {
    "person_care_type_id": 6,
    "person_care_type_name": "โรคติดต่อ"
  }
]
```
