# `al2mdc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| action | char(5) | YES | MUL | NULL |  |  |
| bgo | char(1) | YES |  | NULL |  |  |
| cond | char(5) | YES |  | NULL |  |  |
| dc_no | char(4) | YES | MUL | NULL |  |  |
| dc_yes | char(4) | YES |  | NULL |  |  |
| mdc | char(2) | YES | MUL | NULL |  |  |
| nogo | char(1) | YES |  | NULL |  |  |
| step | char(1) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| dc_no_cond_dc_yes_unique | dc_no | yes | 1 |
| dc_no_cond_dc_yes_unique | cond | yes | 2 |
| dc_no_cond_dc_yes_unique | dc_yes | yes | 3 |
| dc_no_cond_dc_yes_unique | mdc | yes | 4 |
| dc_no_cond_dc_yes_unique | bgo | yes | 5 |
| dc_no_cond_dc_yes_unique | step | yes | 6 |
| dc_no_cond_dc_yes_unique | action | yes | 7 |
| dc_no_cond_dc_yes_unique | nogo | yes | 8 |
| ix_dc_no_cond_dc_yes_unique | action | yes | 1 |
| ix_dc_no_cond_dc_yes_unique | bgo | yes | 2 |
| ix_dc_no_cond_dc_yes_unique | cond | yes | 3 |
| ix_dc_no_cond_dc_yes_unique | dc_no | yes | 4 |
| ix_dc_no_cond_dc_yes_unique | dc_yes | yes | 5 |
| ix_dc_no_cond_dc_yes_unique | mdc | yes | 6 |
| ix_dc_no_cond_dc_yes_unique | nogo | yes | 7 |
| ix_dc_no_cond_dc_yes_unique | step | yes | 8 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_step_mdc | mdc | no | 1 |
| ix_step_mdc | step | no | 2 |
| mdc | mdc | no | 1 |
| step | step | no | 1 |
| step_mdc | step | no | 1 |
| step_mdc | mdc | no | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "action": "PDX",
    "bgo": "-",
    "cond": "-",
    "dc_no": "",
    "dc_yes": "X",
    "mdc": "05",
    "nogo": "-",
    "step": "4",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "action": "ORP",
    "bgo": "3",
    "cond": "-",
    "dc_no": "-",
    "dc_yes": "410A",
    "mdc": "17",
    "nogo": "3",
    "step": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "action": "ORP",
    "bgo": "2",
    "cond": "-",
    "dc_no": "-",
    "dc_yes": "415",
    "mdc": "18",
    "nogo": "2",
    "step": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "action": "ORP",
    "bgo": "2",
    "cond": "-",
    "dc_no": "-",
    "dc_yes": "424",
    "mdc": "19",
    "nogo": "2",
    "step": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "action": "ORP",
    "bgo": "2",
    "cond": "-",
    "dc_no": "-",
    "dc_yes": "461",
    "mdc": "23",
    "nogo": "2",
    "step": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "action": "ORP",
    "bgo": "3",
    "cond": "-",
    "dc_no": "-",
    "dc_yes": "468",
    "mdc": "01",
    "nogo": "3",
    "step": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "action": "ORP",
    "bgo": "3",
    "cond": "-",
    "dc_no": "-",
    "dc_yes": "468",
    "mdc": "02",
    "nogo": "3",
    "step": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "action": "ORP",
    "bgo": "3",
    "cond": "-",
    "dc_no": "-",
    "dc_yes": "468",
    "mdc": "03",
    "nogo": "3",
    "step": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
