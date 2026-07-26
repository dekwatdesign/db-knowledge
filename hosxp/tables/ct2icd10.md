# `ct2icd10`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(5) | YES | MUL | NULL |  |  |
| cc | smallint(6) | YES |  | NULL |  |  |
| dc | char(4) | YES | MUL | NULL |  |  |
| hiv | char(1) | YES | MUL | NULL |  |  |
| maincc | char(5) | YES |  | NULL |  |  |
| mdc | char(2) | YES | MUL | NULL |  |  |
| trauma | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| code_mdc | code | no | 1 |
| code_mdc | mdc | no | 2 |
| dc | dc | no | 1 |
| dc_mdc | dc | no | 1 |
| dc_mdc | mdc | no | 2 |
| hiv_dc_maincc_mdc_unique | hiv | yes | 1 |
| hiv_dc_maincc_mdc_unique | dc | yes | 2 |
| hiv_dc_maincc_mdc_unique | maincc | yes | 3 |
| hiv_dc_maincc_mdc_unique | mdc | yes | 4 |
| hiv_dc_maincc_mdc_unique | trauma | yes | 5 |
| hiv_dc_maincc_mdc_unique | code | yes | 6 |
| ix_hiv_dc_maincc_mdc_unique | code | yes | 1 |
| ix_hiv_dc_maincc_mdc_unique | dc | yes | 2 |
| ix_hiv_dc_maincc_mdc_unique | hiv | yes | 3 |
| ix_hiv_dc_maincc_mdc_unique | maincc | yes | 4 |
| ix_hiv_dc_maincc_mdc_unique | mdc | yes | 5 |
| ix_hiv_dc_maincc_mdc_unique | trauma | yes | 6 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| mdc | mdc | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A00",
    "cc": 0,
    "dc": "182",
    "hiv": "0",
    "maincc": "",
    "mdc": "06",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A000",
    "cc": 0,
    "dc": "182",
    "hiv": "0",
    "maincc": "",
    "mdc": "06",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A001",
    "cc": 0,
    "dc": "182",
    "hiv": "0",
    "maincc": "",
    "mdc": "06",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A009",
    "cc": 0,
    "dc": "182",
    "hiv": "0",
    "maincc": "",
    "mdc": "06",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A01",
    "cc": 0,
    "dc": "423",
    "hiv": "0",
    "maincc": "",
    "mdc": "18",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A010",
    "cc": 0,
    "dc": "423",
    "hiv": "0",
    "maincc": "",
    "mdc": "18",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A011",
    "cc": 0,
    "dc": "423",
    "hiv": "0",
    "maincc": "",
    "mdc": "18",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A012",
    "cc": 0,
    "dc": "423",
    "hiv": "0",
    "maincc": "",
    "mdc": "18",
    "trauma": "N",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
