# `ct2mdcpr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(5) | YES | MUL | NULL |  |  |
| dc | char(4) | YES | MUL | NULL |  |  |
| mdc | char(2) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| code_dc_mdc_unique | code | yes | 1 |
| code_dc_mdc_unique | dc | yes | 2 |
| code_dc_mdc_unique | mdc | yes | 3 |
| dc | dc | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| mdc | mdc | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "0112",
    "dc": "1",
    "mdc": "01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0112",
    "dc": "400",
    "mdc": "17",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0114",
    "dc": "1",
    "mdc": "01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0114",
    "dc": "400",
    "mdc": "17",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0115",
    "dc": "1",
    "mdc": "01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0115",
    "dc": "216",
    "mdc": "08",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0115",
    "dc": "292",
    "mdc": "10",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0118",
    "dc": "1",
    "mdc": "01",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
