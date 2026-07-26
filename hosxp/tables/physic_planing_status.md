# `physic_planing_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_planing_status_id | int(11) | NO | PRI | 0 |  |  |
| physic_planing_status_name | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_planing_status_name | physic_planing_status_name | no | 1 |
| PRIMARY | physic_planing_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_planing_status_id": 1,
    "physic_planing_status_name": "กำลังดำเนินการรักษา"
  },
  {
    "physic_planing_status_id": 3,
    "physic_planing_status_name": "สิ้นสุดแผนการรักษา"
  },
  {
    "physic_planing_status_id": 2,
    "physic_planing_status_name": "หยุด/ยกเลิกแผนการรักษา"
  }
]
```
