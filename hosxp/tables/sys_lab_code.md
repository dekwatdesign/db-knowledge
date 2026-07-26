# `sys_lab_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sys_lab_code_id | int(11) | NO | PRI | 0 |  |  |
| sys_lab_name | varchar(200) | YES | UNI | NULL |  |  |
| lab_items_name_list | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sys_lab_name | sys_lab_name | yes | 1 |
| PRIMARY | sys_lab_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sys_lab_code_id": 1,
    "sys_lab_name": "BUN",
    "lab_items_name_list": "\r\n",
    "hos_guid": "{E26A1D6D-F028-11E2-A10B-00FF8C046E8A}"
  },
  {
    "sys_lab_code_id": 2,
    "sys_lab_name": "FBS",
    "lab_items_name_list": "Glucose/FBS,Glucose",
    "hos_guid": "{E26A24AC-F028-11E2-A10B-00FF8C046E8A}"
  },
  {
    "sys_lab_code_id": 3,
    "sys_lab_name": "Creatinine",
    "lab_items_name_list": "Creatinine",
    "hos_guid": "{E26A263F-F028-11E2-A10B-00FF8C046E8A}"
  },
  {
    "sys_lab_code_id": 4,
    "sys_lab_name": "Total Cholesterol",
    "lab_items_name_list": "\r\n",
    "hos_guid": "{E26A2817-F028-11E2-A10B-00FF8C046E8A}"
  },
  {
    "sys_lab_code_id": 5,
    "sys_lab_name": "Triglyceride",
    "lab_items_name_list": "",
    "hos_guid": "{E26A29B1-F028-11E2-A10B-00FF8C046E8A}"
  },
  {
    "sys_lab_code_id": 6,
    "sys_lab_name": "HDL",
    "lab_items_name_list": "",
    "hos_guid": "{E26A2C09-F028-11E2-A10B-00FF8C046E8A}"
  },
  {
    "sys_lab_code_id": 7,
    "sys_lab_name": "LDL",
    "lab_items_name_list": "",
    "hos_guid": "{E26A2E27-F028-11E2-A10B-00FF8C046E8A}"
  },
  {
    "sys_lab_code_id": 8,
    "sys_lab_name": "AST",
    "lab_items_name_list": "\r\n",
    "hos_guid": "{E26A3122-F028-11E2-A10B-00FF8C046E8A}"
  }
]
```
