# `sys_var`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sys_name | varchar(250) | NO | PRI |  |  |  |
| sys_value | varchar(250) | YES |  | NULL |  |  |
| sys_var_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_sys_var_guid | sys_var_guid | no | 1 |
| PRIMARY | sys_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sys_name": "                      ",
    "sys_value": null,
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sys_name": "0002-06A7-BFEB-FBFF-1D9A-E3BF",
    "sys_value": "",
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sys_name": "A63-0007-doctor-wb-check1",
    "sys_value": null,
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sys_name": "A63-0007-doctor-wb-check2",
    "sys_value": null,
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sys_name": "A63-0007-doctor-wb-check3",
    "sys_value": null,
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sys_name": "A63-0007-doctor-wb-lookup1",
    "sys_value": null,
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sys_name": "A63-0007-doctor-wb-printer1",
    "sys_value": null,
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sys_name": "A63-0007-doctor-wb-printer2",
    "sys_value": null,
    "sys_var_guid": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
