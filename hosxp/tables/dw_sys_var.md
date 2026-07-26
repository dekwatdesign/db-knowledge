# `dw_sys_var`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sys_name | varchar(250) | NO | PRI |  |  |  |
| sys_value | varchar(250) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | sys_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "sys_name": "dw_serialnumber",
    "sys_value": "0000-0000-C800-5B64-16EE",
    "hospcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
