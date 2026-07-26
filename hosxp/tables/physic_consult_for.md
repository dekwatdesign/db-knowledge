# `physic_consult_for`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_consult_for_id | int(11) | NO | PRI | 0 |  |  |
| physic_consult_for_name | varchar(255) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| number | int(11) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_consult_for_name | physic_consult_for_name | no | 1 |
| PRIMARY | physic_consult_for_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_consult_for_id": 1,
    "physic_consult_for_name": "Relief pain",
    "active_status": null,
    "number": null,
    "order_no": null
  },
  {
    "physic_consult_for_id": 2,
    "physic_consult_for_name": "Strengthening",
    "active_status": null,
    "number": null,
    "order_no": null
  },
  {
    "physic_consult_for_id": 3,
    "physic_consult_for_name": "Ambulation trainging",
    "active_status": null,
    "number": null,
    "order_no": null
  },
  {
    "physic_consult_for_id": 4,
    "physic_consult_for_name": "Chest Physiotherapy",
    "active_status": null,
    "number": null,
    "order_no": null
  },
  {
    "physic_consult_for_id": 5,
    "physic_consult_for_name": "Program for hemiplegia",
    "active_status": null,
    "number": null,
    "order_no": null
  },
  {
    "physic_consult_for_id": 6,
    "physic_consult_for_name": "Program for paraplegia",
    "active_status": null,
    "number": null,
    "order_no": null
  },
  {
    "physic_consult_for_id": 7,
    "physic_consult_for_name": "Home program",
    "active_status": null,
    "number": null,
    "order_no": null
  },
  {
    "physic_consult_for_id": 8,
    "physic_consult_for_name": "Improve R.O.M.",
    "active_status": null,
    "number": null,
    "order_no": null
  }
]
```
