# `stretcher_emergency`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_emergency_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_emergency_name | varchar(255) | YES |  | NULL |  |  |
| stretcher_priority_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_stretcher_emergency_priority | stretcher_priority_id | no | 1 |
| PRIMARY | stretcher_emergency_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stretcher_emergency_id": 1,
    "stretcher_emergency_name": "CT brain",
    "stretcher_priority_id": 3
  },
  {
    "stretcher_emergency_id": 2,
    "stretcher_emergency_name": "STEMI",
    "stretcher_priority_id": 3
  },
  {
    "stretcher_emergency_id": 3,
    "stretcher_emergency_name": "Stroke Fast Track",
    "stretcher_priority_id": 3
  },
  {
    "stretcher_emergency_id": 4,
    "stretcher_emergency_name": "On ET Tube",
    "stretcher_priority_id": 3
  },
  {
    "stretcher_emergency_id": 5,
    "stretcher_emergency_name": "Multiple injury",
    "stretcher_priority_id": 3
  },
  {
    "stretcher_emergency_id": 6,
    "stretcher_emergency_name": "ผู้ป่วยมีภาวะเร่งด่วนถึงแก่ชีวิต",
    "stretcher_priority_id": 3
  },
  {
    "stretcher_emergency_id": 7,
    "stretcher_emergency_name": "ภาวะเร่งด่วนในผู้ป่วยเด็ก",
    "stretcher_priority_id": 3
  },
  {
    "stretcher_emergency_id": 8,
    "stretcher_emergency_name": "ภาวะคลอด",
    "stretcher_priority_id": 3
  }
]
```
