# `computer_var`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_var_id | int(11) | NO | PRI | 0 |  |  |
| computername | varchar(200) | YES | MUL | NULL |  |  |
| var_name | varchar(250) | YES |  | NULL |  |  |
| var_value | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computername_var_name | computername | no | 1 |
| ix_computername_var_name | var_name | no | 2 |
| PRIMARY | computer_var_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer_var_id": 1,
    "computername": "FINANCE1-YUWA",
    "var_name": "KTC-EDC-PORT",
    "var_value": "COM9"
  },
  {
    "computer_var_id": 2,
    "computername": "RC1-YUWA-PC",
    "var_name": "KTC-EDC-PORT",
    "var_value": "COM1"
  },
  {
    "computer_var_id": 3,
    "computername": "RC04-YUWA",
    "var_name": "KTC-EDC-PORT",
    "var_value": "COM1"
  },
  {
    "computer_var_id": 4,
    "computername": "FIN04-YUWA",
    "var_name": "KTC-EDC-PORT",
    "var_value": "COM1"
  },
  {
    "computer_var_id": 5,
    "computername": "COM-PC",
    "var_name": "TPatientVisitEntryForm:CHECK",
    "var_value": null
  },
  {
    "computer_var_id": 6,
    "computername": "A54-60",
    "var_name": "KTC-EDC-PORT",
    "var_value": "COM1"
  },
  {
    "computer_var_id": 7,
    "computername": "A54-0097",
    "var_name": "KTC-EDC-PORT",
    "var_value": "COM1"
  },
  {
    "computer_var_id": 8,
    "computername": "A63-0030",
    "var_name": "KTC-EDC-PORT",
    "var_value": "COM3"
  }
]
```
