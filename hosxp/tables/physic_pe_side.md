# `physic_pe_side`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_side_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_side_name | varchar(50) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_side_name | physic_pe_side_name | no | 1 |
| PRIMARY | physic_pe_side_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "physic_pe_side_id": 3,
    "physic_pe_side_name": "ทั้งสองข้าง",
    "active_status": "Y"
  },
  {
    "physic_pe_side_id": 2,
    "physic_pe_side_name": "ขวา",
    "active_status": "Y"
  },
  {
    "physic_pe_side_id": 1,
    "physic_pe_side_name": "ซ้าย",
    "active_status": "Y"
  },
  {
    "physic_pe_side_id": 4,
    "physic_pe_side_name": "ไม่ระบุ",
    "active_status": "Y"
  }
]
```
