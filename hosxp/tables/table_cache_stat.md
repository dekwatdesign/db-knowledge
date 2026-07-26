# `table_cache_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(100) | NO | PRI |  |  |  |
| update_scn_id | int(11) | YES |  | NULL |  |  |
| update_computer_name | varchar(100) | YES |  | NULL |  |  |
| update_staff | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | table_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "table_name": "computer_mac",
    "update_scn_id": 1476980904,
    "update_computer_name": "COM1",
    "update_staff": "chatchawal"
  },
  {
    "table_name": "sys_var",
    "update_scn_id": 1475599636,
    "update_computer_name": "COM1",
    "update_staff": "chatchawal"
  },
  {
    "table_name": "nondrugitems",
    "update_scn_id": 1744217229,
    "update_computer_name": "A56-0114",
    "update_staff": ""
  },
  {
    "table_name": "s_drugitems",
    "update_scn_id": 1779796762,
    "update_computer_name": "A60-0004",
    "update_staff": "yuwa135"
  },
  {
    "table_name": "clinic",
    "update_scn_id": 1770991000,
    "update_computer_name": "A56-0114",
    "update_staff": "chatchawal"
  },
  {
    "table_name": "clinic_hd_cmp_type",
    "update_scn_id": 1538582026,
    "update_computer_name": "COM-PC",
    "update_staff": ""
  },
  {
    "table_name": "doctor",
    "update_scn_id": 1779782791,
    "update_computer_name": "S08000201-00062",
    "update_staff": "yuwa214"
  },
  {
    "table_name": "drugitems",
    "update_scn_id": 1778857181,
    "update_computer_name": "A56-0114",
    "update_staff": ""
  }
]
```
