# `ckd_lab_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckd_lab_code_id | int(11) | NO | PRI | NULL |  |  |
| ckd_lab_name | varchar(200) | NO | UNI | NULL |  |  |
| lab_items_name_list | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_ckd_lab_name | ckd_lab_name | yes | 1 |
| ix_idx_hos_guid | hos_guid | no | 1 |
| PRIMARY | ckd_lab_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ckd_lab_code_id": 1,
    "ckd_lab_name": "Hb",
    "lab_items_name_list": "",
    "hos_guid": null
  },
  {
    "ckd_lab_code_id": 2,
    "ckd_lab_name": "Hct (%)",
    "lab_items_name_list": "",
    "hos_guid": null
  },
  {
    "ckd_lab_code_id": 3,
    "ckd_lab_name": "WBC count",
    "lab_items_name_list": "",
    "hos_guid": null
  },
  {
    "ckd_lab_code_id": 4,
    "ckd_lab_name": "PLATELET",
    "lab_items_name_list": "",
    "hos_guid": null
  },
  {
    "ckd_lab_code_id": 5,
    "ckd_lab_name": "HbA1c",
    "lab_items_name_list": "",
    "hos_guid": null
  },
  {
    "ckd_lab_code_id": 6,
    "ckd_lab_name": "PT",
    "lab_items_name_list": "",
    "hos_guid": null
  },
  {
    "ckd_lab_code_id": 7,
    "ckd_lab_name": "INR",
    "lab_items_name_list": "",
    "hos_guid": null
  },
  {
    "ckd_lab_code_id": 8,
    "ckd_lab_name": "Activated Partial Thromboplastin Time (APTT)",
    "lab_items_name_list": "",
    "hos_guid": null
  }
]
```
