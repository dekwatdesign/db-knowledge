# `drp_cause_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_cause_type_id | int(11) | NO | PRI | 0 |  |  |
| drp_cause_type_name | varchar(200) | YES | UNI | NULL |  |  |
| std_code | varchar(10) | YES |  | NULL |  |  |
| drp_cause_group_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_cause_type_name | drp_cause_type_name | yes | 1 |
| PRIMARY | drp_cause_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drp_cause_type_id": 1,
    "drp_cause_type_name": "Drug selection",
    "std_code": null,
    "drp_cause_group_code": null
  },
  {
    "drp_cause_type_id": 2,
    "drp_cause_type_name": "Drug form",
    "std_code": null,
    "drp_cause_group_code": null
  },
  {
    "drp_cause_type_id": 3,
    "drp_cause_type_name": "Dose selection",
    "std_code": null,
    "drp_cause_group_code": null
  },
  {
    "drp_cause_type_id": 4,
    "drp_cause_type_name": "Treatment duration",
    "std_code": null,
    "drp_cause_group_code": null
  },
  {
    "drp_cause_type_id": 5,
    "drp_cause_type_name": "Drug use process",
    "std_code": null,
    "drp_cause_group_code": null
  },
  {
    "drp_cause_type_id": 6,
    "drp_cause_type_name": "Logistics",
    "std_code": null,
    "drp_cause_group_code": null
  },
  {
    "drp_cause_type_id": 7,
    "drp_cause_type_name": "Patient",
    "std_code": null,
    "drp_cause_group_code": null
  },
  {
    "drp_cause_type_id": 8,
    "drp_cause_type_name": "Other",
    "std_code": null,
    "drp_cause_group_code": null
  }
]
```
