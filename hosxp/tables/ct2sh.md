# `ct2sh`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dc | char(4) | YES | MUL | NULL |  |  |
| descript | char(64) | YES |  | NULL |  |  |
| hierar | double(22,3) | YES |  | NULL |  |  |
| icdtype | char(1) | YES |  | NULL |  |  |
| mdc | char(2) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| dc | dc | no | 1 |
| dc_mdc | dc | no | 1 |
| dc_mdc | mdc | no | 2 |
| dc_mdc_descript_unique | dc | yes | 1 |
| dc_mdc_descript_unique | mdc | yes | 2 |
| dc_mdc_descript_unique | descript | yes | 3 |
| dc_mdc_descript_unique | icdtype | yes | 4 |
| dc_mdc_descript_unique | hierar | yes | 5 |
| ix_dc_mdc_descript_unique | dc | yes | 1 |
| ix_dc_mdc_descript_unique | descript | yes | 2 |
| ix_dc_mdc_descript_unique | hierar | yes | 3 |
| ix_dc_mdc_descript_unique | icdtype | yes | 4 |
| ix_dc_mdc_descript_unique | mdc | yes | 5 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| mdc | mdc | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dc": "1",
    "descript": "Craniotomy",
    "hierar": 1.0,
    "icdtype": "P",
    "mdc": "01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dc": "103",
    "descript": "Heart transplant",
    "hierar": 1.0,
    "icdtype": "P",
    "mdc": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dc": "104",
    "descript": "Cardiac valve & other major cardiothoracic proc",
    "hierar": 2.0,
    "icdtype": "P",
    "mdc": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dc": "104x",
    "descript": "Cardiac valve & other major cardiothoracic proc combinations",
    "hierar": 2.0,
    "icdtype": "C",
    "mdc": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dc": "106",
    "descript": "Coronary bypass",
    "hierar": 4.0,
    "icdtype": "P",
    "mdc": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dc": "107",
    "descript": "Coronary bypass : Cardiac cath",
    "hierar": 16.0,
    "icdtype": "N",
    "mdc": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dc": "108",
    "descript": "Other cardiothoracic procedures",
    "hierar": 3.0,
    "icdtype": "P",
    "mdc": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dc": "108x",
    "descript": "Other cardiothoracic procedure combination",
    "hierar": 3.0,
    "icdtype": "C",
    "mdc": "05",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
