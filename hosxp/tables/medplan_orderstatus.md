# `medplan_orderstatus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| orderstatus | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| def_value | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | orderstatus | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "orderstatus": "C",
    "name": "Continue",
    "hos_guid": null,
    "hos_guid_ext": null,
    "def_value": null
  },
  {
    "orderstatus": "S",
    "name": "STAT",
    "hos_guid": null,
    "hos_guid_ext": null,
    "def_value": null
  }
]
```
