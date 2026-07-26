# `app_storage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| app_storage_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(100) | YES | MUL | NULL |  |  |
| storage_key | varchar(250) | YES |  | NULL |  |  |
| storage_section | varchar(250) | YES |  | NULL |  |  |
| storage_value | text | YES |  | NULL |  |  |
| storage_default_value | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computername | computer_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | app_storage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "app_storage_id": 0,
    "computer_name": "DESKTOP-AVVEHF6",
    "storage_key": "FormVersion",
    "storage_section": "AppointmentViewForm",
    "storage_value": "0",
    "storage_default_value": null,
    "hos_guid": null
  },
  {
    "app_storage_id": 1,
    "computer_name": "NONSUWAN-HP",
    "storage_key": "FormVersion",
    "storage_section": "LoginForm",
    "storage_value": "0",
    "storage_default_value": null,
    "hos_guid": null
  },
  {
    "app_storage_id": 2,
    "computer_name": "NONSUWAN-HP",
    "storage_key": "FormVersion",
    "storage_section": "DepartmentSelectForm",
    "storage_value": "0",
    "storage_default_value": null,
    "hos_guid": null
  },
  {
    "app_storage_id": 3,
    "computer_name": "NONSUWAN-HP",
    "storage_key": "DepartmentPickEdit1_Text",
    "storage_section": "DepartmentSelectForm",
    "storage_value": "แผนกคอมพิวเตอร์",
    "storage_default_value": null,
    "hos_guid": null
  },
  {
    "app_storage_id": 4,
    "computer_name": "NSWHOS-EFC0D0F9",
    "storage_key": "FormVersion",
    "storage_section": "LoginForm",
    "storage_value": "0",
    "storage_default_value": null,
    "hos_guid": null
  },
  {
    "app_storage_id": 5,
    "computer_name": "NSWHOS-EFC0D0F9",
    "storage_key": "FormVersion",
    "storage_section": "DepartmentSelectForm",
    "storage_value": "0",
    "storage_default_value": null,
    "hos_guid": null
  },
  {
    "app_storage_id": 6,
    "computer_name": "NSWHOS-EFC0D0F9",
    "storage_key": "DepartmentPickEdit1_Text",
    "storage_section": "DepartmentSelectForm",
    "storage_value": "ผู้ป่วยใน",
    "storage_default_value": null,
    "hos_guid": null
  },
  {
    "app_storage_id": 7,
    "computer_name": "SCREEN2",
    "storage_key": "FormVersion",
    "storage_section": "LoginForm",
    "storage_value": "0",
    "storage_default_value": null,
    "hos_guid": null
  }
]
```
