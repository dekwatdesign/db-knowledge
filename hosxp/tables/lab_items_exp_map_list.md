# `lab_items_exp_map_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_exp_map_list_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| report_result | varchar(200) | YES |  | NULL |  |  |
| export_value | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | no | 1 |
| ix_lab_items_code_result | lab_items_code | yes | 1 |
| ix_lab_items_code_result | report_result | yes | 2 |
| PRIMARY | lab_items_exp_map_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_items_exp_map_list_id": 1,
    "lab_items_code": 88,
    "report_result": "NEg",
    "export_value": null
  },
  {
    "lab_items_exp_map_list_id": 2,
    "lab_items_code": 88,
    "report_result": "Negative",
    "export_value": null
  },
  {
    "lab_items_exp_map_list_id": 3,
    "lab_items_code": 88,
    "report_result": "Trace",
    "export_value": null
  },
  {
    "lab_items_exp_map_list_id": 4,
    "lab_items_code": 9,
    "report_result": "4.4",
    "export_value": null
  },
  {
    "lab_items_exp_map_list_id": 5,
    "lab_items_code": 9,
    "report_result": "4.1",
    "export_value": null
  },
  {
    "lab_items_exp_map_list_id": 6,
    "lab_items_code": 9,
    "report_result": "3.9",
    "export_value": null
  },
  {
    "lab_items_exp_map_list_id": 7,
    "lab_items_code": 9,
    "report_result": "4.5",
    "export_value": null
  },
  {
    "lab_items_exp_map_list_id": 8,
    "lab_items_code": 9,
    "report_result": "4.3",
    "export_value": null
  }
]
```
