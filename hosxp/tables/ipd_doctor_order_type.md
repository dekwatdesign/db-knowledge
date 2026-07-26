# `ipd_doctor_order_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_type_name | varchar(200) | YES | UNI | NULL |  |  |
| short_name | varchar(10) | YES |  | NULL |  |  |
| is_editable | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_doctor_order_type_name | ipd_doctor_order_type_name | yes | 1 |
| PRIMARY | ipd_doctor_order_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_doctor_order_type_id": 1,
    "ipd_doctor_order_type_name": "Medication",
    "short_name": "MED",
    "is_editable": null
  },
  {
    "ipd_doctor_order_type_id": 2,
    "ipd_doctor_order_type_name": "Operation",
    "short_name": "OPR",
    "is_editable": null
  },
  {
    "ipd_doctor_order_type_id": 3,
    "ipd_doctor_order_type_name": "Examination",
    "short_name": "EXM",
    "is_editable": null
  },
  {
    "ipd_doctor_order_type_id": 4,
    "ipd_doctor_order_type_name": "Other",
    "short_name": "OTH",
    "is_editable": null
  },
  {
    "ipd_doctor_order_type_id": 9,
    "ipd_doctor_order_type_name": "Off",
    "short_name": "OFF",
    "is_editable": null
  },
  {
    "ipd_doctor_order_type_id": 5,
    "ipd_doctor_order_type_name": "Home Medication",
    "short_name": "HME",
    "is_editable": null
  },
  {
    "ipd_doctor_order_type_id": 6,
    "ipd_doctor_order_type_name": "OPD Treatment",
    "short_name": "OPD",
    "is_editable": null
  },
  {
    "ipd_doctor_order_type_id": 7,
    "ipd_doctor_order_type_name": "Med Reconciliation",
    "short_name": "MRC",
    "is_editable": null
  }
]
```
