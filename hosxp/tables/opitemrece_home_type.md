# `opitemrece_home_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_home_type_id | int(11) | NO | PRI | 0 |  |  |
| opitemrece_home_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opitemrece_home_type_name | opitemrece_home_type_name | yes | 1 |
| PRIMARY | opitemrece_home_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "opitemrece_home_type_id": 1,
    "opitemrece_home_type_name": "ใช้ในโรงพยาบาล"
  },
  {
    "opitemrece_home_type_id": 2,
    "opitemrece_home_type_name": "ใช้ที่บ้าน"
  },
  {
    "opitemrece_home_type_id": 3,
    "opitemrece_home_type_name": "ยาเกิน 2 สัปดาห์ (กลับบ้าน)"
  },
  {
    "opitemrece_home_type_id": 4,
    "opitemrece_home_type_name": "ยาโรคเรื้อรัง (กลับบ้าน)"
  }
]
```
