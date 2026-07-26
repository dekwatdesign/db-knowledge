# `person_vt_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_vt_type_id | int(11) | NO | PRI | 0 |  |  |
| person_vt_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_vt_type_name | person_vt_type_name | yes | 1 |
| PRIMARY | person_vt_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_vt_type_id": 1,
    "person_vt_type_name": "ความดันโลหิต"
  },
  {
    "person_vt_type_id": 2,
    "person_vt_type_name": "อุณหภูมิ"
  },
  {
    "person_vt_type_id": 3,
    "person_vt_type_name": "น้ำหนัก"
  },
  {
    "person_vt_type_id": 4,
    "person_vt_type_name": "ระดับน้ำตาลในเลือด (BGM)"
  },
  {
    "person_vt_type_id": 5,
    "person_vt_type_name": "EKG"
  }
]
```
