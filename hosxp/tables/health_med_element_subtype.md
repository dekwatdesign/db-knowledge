# `health_med_element_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_element_subtype_id | int(11) | NO | PRI | 0 |  |  |
| health_med_element_type_id | int(11) | YES | MUL | NULL |  |  |
| health_med_element_subtype_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_element_subtype_name | health_med_element_subtype_name | yes | 1 |
| ix_type_id | health_med_element_type_id | no | 1 |
| PRIMARY | health_med_element_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_element_subtype_id": 1,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "เกศา (ผม)"
  },
  {
    "health_med_element_subtype_id": 2,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "โลมา (ขน)"
  },
  {
    "health_med_element_subtype_id": 3,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "นขา (เล็บ)"
  },
  {
    "health_med_element_subtype_id": 4,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "ทันตา (ฟัน)"
  },
  {
    "health_med_element_subtype_id": 5,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "ตะโจ (หนัง)"
  },
  {
    "health_med_element_subtype_id": 6,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "มังสัง (เนื้อ)"
  },
  {
    "health_med_element_subtype_id": 7,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "นหารู (เส้นเอ็น)"
  },
  {
    "health_med_element_subtype_id": 8,
    "health_med_element_type_id": 1,
    "health_med_element_subtype_name": "อัฐิ (กระดูก)"
  }
]
```
