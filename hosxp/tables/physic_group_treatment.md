# `physic_group_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_group_treatment_id | int(11) | NO | PRI | 0 |  |  |
| physic_group_treatment_name | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_group_treatment_name | physic_group_treatment_name | no | 1 |
| PRIMARY | physic_group_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_group_treatment_id": 3,
    "physic_group_treatment_name": "ฟื้นฟูสมรรถภาพ"
  },
  {
    "physic_group_treatment_id": 2,
    "physic_group_treatment_name": "รักษา"
  },
  {
    "physic_group_treatment_id": 1,
    "physic_group_treatment_name": "ส่งเสริมและป้องกัน"
  }
]
```
