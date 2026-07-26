# `physic_diagnosis_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_diagnosis_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_diagnosis_type_name | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_diagnosis_type_name | physic_diagnosis_type_name | no | 1 |
| PRIMARY | physic_diagnosis_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_diagnosis_type_id": 1,
    "physic_diagnosis_type_name": "แพทย์ผู้ส่ง"
  },
  {
    "physic_diagnosis_type_id": 2,
    "physic_diagnosis_type_name": "นักกายภาพบำบัด"
  },
  {
    "physic_diagnosis_type_id": 3,
    "physic_diagnosis_type_name": "ตาม Login"
  }
]
```
