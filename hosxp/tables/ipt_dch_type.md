# `ipt_dch_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_dch_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_dch_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_dch_type_name | ipt_dch_type_name | yes | 1 |
| PRIMARY | ipt_dch_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_dch_type_id": 1,
    "ipt_dch_type_name": "ควบคุมอาการ"
  },
  {
    "ipt_dch_type_id": 2,
    "ipt_dch_type_name": "รักษาทางกาย"
  },
  {
    "ipt_dch_type_id": 3,
    "ipt_dch_type_name": "ตรวจทางจิตวิทยา"
  },
  {
    "ipt_dch_type_id": 4,
    "ipt_dch_type_name": "ติดต่อค้นหาญาติ"
  },
  {
    "ipt_dch_type_id": 5,
    "ipt_dch_type_name": "เตรียมพร้อมชุมชน ฟื้นฟูสมรรถภาพทางจิตสังคม"
  },
  {
    "ipt_dch_type_id": 6,
    "ipt_dch_type_name": "Acute phase II"
  },
  {
    "ipt_dch_type_id": 7,
    "ipt_dch_type_name": "Sub Acute"
  },
  {
    "ipt_dch_type_id": 8,
    "ipt_dch_type_name": "OT Chronic"
  }
]
```
