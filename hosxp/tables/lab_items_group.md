# `lab_items_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_group_code | int(11) | NO | PRI | 0 |  |  |
| lab_items_group_name | varchar(250) | YES |  | NULL |  |  |
| lab_department_code | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_items_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_items_group_code": 1,
    "lab_items_group_name": "HEMATOLOGY",
    "lab_department_code": null,
    "hos_guid": ""
  },
  {
    "lab_items_group_code": 3,
    "lab_items_group_name": "CHEMISTRY",
    "lab_department_code": null,
    "hos_guid": ""
  },
  {
    "lab_items_group_code": 4,
    "lab_items_group_name": "PHARMARCOGENOMICS",
    "lab_department_code": null,
    "hos_guid": null
  },
  {
    "lab_items_group_code": 5,
    "lab_items_group_name": "IMMUNOLOGY",
    "lab_department_code": null,
    "hos_guid": ""
  },
  {
    "lab_items_group_code": 8,
    "lab_items_group_name": "MICROSCOPY",
    "lab_department_code": null,
    "hos_guid": ""
  },
  {
    "lab_items_group_code": 9,
    "lab_items_group_name": "OUT LAB",
    "lab_department_code": null,
    "hos_guid": ""
  },
  {
    "lab_items_group_code": 10,
    "lab_items_group_name": "CHECK UP",
    "lab_department_code": null,
    "hos_guid": ""
  },
  {
    "lab_items_group_code": 12,
    "lab_items_group_name": "DRUG MORNITORING",
    "lab_department_code": null,
    "hos_guid": ""
  }
]
```
