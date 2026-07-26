# `user_form_storage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_form_storage_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(50) | YES | MUL | NULL |  |  |
| form_class | varchar(200) | YES |  | NULL |  |  |
| control_name | varchar(200) | YES | MUL | NULL |  |  |
| control_value | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_loginname | loginname | no | 1 |
| ix_loginname_f_c | loginname | yes | 1 |
| ix_loginname_f_c | form_class | yes | 2 |
| ix_loginname_f_c | control_name | yes | 3 |
| ix_loginname_f_c_index | control_name | yes | 1 |
| ix_loginname_f_c_index | form_class | yes | 2 |
| ix_loginname_f_c_index | loginname | yes | 3 |
| PRIMARY | user_form_storage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "user_form_storage_id": 1,
    "loginname": "yuwa277",
    "form_class": "THOSxPMedicationOrderFrame",
    "control_name": "SubStockCombobox",
    "control_value": ""
  },
  {
    "user_form_storage_id": 2,
    "loginname": "yuwa206",
    "form_class": "THOSxPMedicationOrderFrame",
    "control_name": "SubStockCombobox",
    "control_value": ""
  }
]
```
