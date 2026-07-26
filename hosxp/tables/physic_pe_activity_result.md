# `physic_pe_activity_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_activity_result_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_activity_result_name | varchar(150) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_activity_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "physic_pe_activity_result_id": 1,
    "physic_pe_activity_result_name": "Dependent",
    "active_status": "Y"
  },
  {
    "physic_pe_activity_result_id": 2,
    "physic_pe_activity_result_name": "Independent  with moderate assist",
    "active_status": "Y"
  },
  {
    "physic_pe_activity_result_id": 3,
    "physic_pe_activity_result_name": "Independent  with minimal assist",
    "active_status": "Y"
  },
  {
    "physic_pe_activity_result_id": 4,
    "physic_pe_activity_result_name": "Independent with  supervision",
    "active_status": "Y"
  },
  {
    "physic_pe_activity_result_id": 5,
    "physic_pe_activity_result_name": "Complete independent",
    "active_status": "Y"
  }
]
```
