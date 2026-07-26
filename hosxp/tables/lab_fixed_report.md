# `lab_fixed_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| remark | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "lab_items_code": 3001,
    "remark": "FBS",
    "hos_guid": null
  },
  {
    "id": 2,
    "lab_items_code": 33,
    "remark": "BUN",
    "hos_guid": null
  },
  {
    "id": 3,
    "lab_items_code": 3003,
    "remark": "CREATININE",
    "hos_guid": null
  },
  {
    "id": 4,
    "lab_items_code": 3004,
    "remark": "URIC ACID",
    "hos_guid": null
  },
  {
    "id": 5,
    "lab_items_code": 3005,
    "remark": "CHOLESTEROL",
    "hos_guid": null
  },
  {
    "id": 6,
    "lab_items_code": 3006,
    "remark": "TRIGLYCERIDE",
    "hos_guid": null
  },
  {
    "id": 7,
    "lab_items_code": 3007,
    "remark": "HDL-C",
    "hos_guid": null
  },
  {
    "id": 8,
    "lab_items_code": 3008,
    "remark": "LDL",
    "hos_guid": null
  }
]
```
