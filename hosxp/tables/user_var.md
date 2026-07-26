# `user_var`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_var_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(200) | YES | MUL | NULL |  |  |
| var_name | varchar(250) | YES |  | NULL |  |  |
| var_value | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_loginname | loginname | no | 1 |
| ix_loginname_var_name | loginname | no | 1 |
| ix_loginname_var_name | var_name | no | 2 |
| PRIMARY | user_var_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "user_var_id": 1,
    "loginname": "chatchawal",
    "var_name": "EXP50-MONGODB-IP",
    "var_value": "cloud2.hosxp.net"
  },
  {
    "user_var_id": 2,
    "loginname": "yuwa247",
    "var_name": "THOSxPOvstDoctorDiagListFrame:ICDCodeMapCheck:Check",
    "var_value": null
  },
  {
    "user_var_id": 3,
    "loginname": "yuwa210",
    "var_name": "THOSxPOvstDoctorDiagListFrame:ICDCodeMapCheck:Check",
    "var_value": null
  },
  {
    "user_var_id": 4,
    "loginname": "yuwa004",
    "var_name": "THOSxPOvstDoctorDiagListFrame:ICDCodeMapCheck:Check",
    "var_value": "Y"
  },
  {
    "user_var_id": 5,
    "loginname": "yuwa008",
    "var_name": "THOSxPOvstDoctorDiagListFrame:ICDCodeMapCheck:Check",
    "var_value": "Y"
  },
  {
    "user_var_id": 6,
    "loginname": "yuwa044",
    "var_name": "THOSxPOvstDoctorDiagListFrame:ICDCodeMapCheck:Check",
    "var_value": null
  },
  {
    "user_var_id": 7,
    "loginname": "yuwa155",
    "var_name": "THOSxPOvstDoctorDiagListFrame:ICDCodeMapCheck:Check",
    "var_value": null
  },
  {
    "user_var_id": 8,
    "loginname": "yuwa211",
    "var_name": "THOSxPOvstDoctorDiagListFrame:ICDCodeMapCheck:Check",
    "var_value": null
  }
]
```
