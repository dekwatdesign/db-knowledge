# `system_setting_module`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| system_setting_module_id | int(11) | NO | PRI | 0 |  |  |
| system_setting_module_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_system_setting_module_name | system_setting_module_name | yes | 1 |
| PRIMARY | system_setting_module_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "system_setting_module_id": 18,
    "system_setting_module_name": "BMS Kiosk"
  },
  {
    "system_setting_module_id": 23,
    "system_setting_module_name": "Cloud Services"
  },
  {
    "system_setting_module_id": 20,
    "system_setting_module_name": "Datacenter"
  },
  {
    "system_setting_module_id": 17,
    "system_setting_module_name": "E-Claim บริษัทกลาง"
  },
  {
    "system_setting_module_id": 26,
    "system_setting_module_name": "EHP Setting"
  },
  {
    "system_setting_module_id": 25,
    "system_setting_module_name": "HealthFlow Setting"
  },
  {
    "system_setting_module_id": 27,
    "system_setting_module_name": "HOSxP Marketplace"
  },
  {
    "system_setting_module_id": 10,
    "system_setting_module_name": "Inventory"
  }
]
```
