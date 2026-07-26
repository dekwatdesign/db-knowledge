# `al2dc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| aafld | char(2) | NO | PRI |  |  |  |
| acode | char(1) | NO | PRI |  |  |  |
| cond | char(4) | NO | PRI |  |  |  |
| dc | char(4) | NO | PRI |  |  |  |
| forsort | char(4) | NO | PRI |  |  |  |
| mdc | char(2) | NO | PRI |  |  |  |
| otype1 | char(1) | NO | PRI |  |  |  |
| otype2 | char(1) | NO | PRI |  |  |  |
| otype3 | char(1) | NO | PRI |  |  |  |
| outc1 | char(4) | NO | PRI |  |  |  |
| outc2 | char(4) | NO | PRI |  |  |  |
| outc3 | char(4) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| acode_otype2_otype3_unique | acode | yes | 1 |
| acode_otype2_otype3_unique | otype2 | yes | 2 |
| acode_otype2_otype3_unique | otype3 | yes | 3 |
| acode_otype2_otype3_unique | outc3 | yes | 4 |
| acode_otype2_otype3_unique | outc2 | yes | 5 |
| acode_otype2_otype3_unique | aafld | yes | 6 |
| acode_otype2_otype3_unique | outc1 | yes | 7 |
| acode_otype2_otype3_unique | otype1 | yes | 8 |
| acode_otype2_otype3_unique | cond | yes | 9 |
| acode_otype2_otype3_unique | dc | yes | 10 |
| acode_otype2_otype3_unique | forsort | yes | 11 |
| acode_otype2_otype3_unique | mdc | yes | 12 |
| dc | dc | no | 1 |
| ix_acode_otype2_otype3_unique | aafld | yes | 1 |
| ix_acode_otype2_otype3_unique | outc2 | yes | 2 |
| ix_acode_otype2_otype3_unique | outc1 | yes | 3 |
| ix_acode_otype2_otype3_unique | otype3 | yes | 4 |
| ix_acode_otype2_otype3_unique | otype2 | yes | 5 |
| ix_acode_otype2_otype3_unique | otype1 | yes | 6 |
| ix_acode_otype2_otype3_unique | mdc | yes | 7 |
| ix_acode_otype2_otype3_unique | forsort | yes | 8 |
| ix_acode_otype2_otype3_unique | dc | yes | 9 |
| ix_acode_otype2_otype3_unique | cond | yes | 10 |
| ix_acode_otype2_otype3_unique | acode | yes | 11 |
| ix_acode_otype2_otype3_unique | outc3 | yes | 12 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_mdc_dc | dc | no | 1 |
| ix_mdc_dc | mdc | no | 2 |
| mdc | mdc | no | 1 |
| mdc_dc | mdc | no | 1 |
| mdc_dc | dc | no | 2 |
| PRIMARY | aafld | yes | 1 |
| PRIMARY | acode | yes | 2 |
| PRIMARY | cond | yes | 3 |
| PRIMARY | dc | yes | 4 |
| PRIMARY | forsort | yes | 5 |
| PRIMARY | mdc | yes | 6 |
| PRIMARY | otype1 | yes | 7 |
| PRIMARY | otype2 | yes | 8 |
| PRIMARY | otype3 | yes | 9 |
| PRIMARY | outc1 | yes | 10 |
| PRIMARY | outc2 | yes | 11 |
| PRIMARY | outc3 | yes | 12 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "103",
    "forsort": "103",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "103",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "108",
    "forsort": "108",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "108",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "108x",
    "forsort": "108x",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "108",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "109",
    "forsort": "109",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "109",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "112x",
    "forsort": "112x",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "112",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "113",
    "forsort": "113",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "113",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "114",
    "forsort": "114",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "114",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "aafld": "",
    "acode": "0",
    "cond": "",
    "dc": "115x",
    "forsort": "115x",
    "mdc": "05",
    "otype1": "0",
    "otype2": "-",
    "otype3": "-",
    "outc1": "115",
    "outc2": "-",
    "outc3": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
