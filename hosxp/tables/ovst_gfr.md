# `ovst_gfr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| creatinine | double(15,3) | YES |  | NULL |  |  |
| ckd_epi | double(15,3) | YES |  | NULL |  |  |
| egfr | double(15,3) | YES |  | NULL |  |  |
| mdrd | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "590404083110",
    "bw": null,
    "creatinine": 10.4,
    "ckd_epi": 6.493,
    "egfr": 18.377,
    "mdrd": 6.601,
    "hos_guid": null
  },
  {
    "vn": "630217083154",
    "bw": null,
    "creatinine": 0.4,
    "ckd_epi": 182.141,
    "egfr": 341.19,
    "mdrd": 309.641,
    "hos_guid": null
  },
  {
    "vn": "630604090030",
    "bw": null,
    "creatinine": 0.8,
    "ckd_epi": 125.914,
    "egfr": 144.917,
    "mdrd": 119.796,
    "hos_guid": null
  },
  {
    "vn": "630731080041",
    "bw": null,
    "creatinine": 0.4,
    "ckd_epi": 182.141,
    "egfr": 341.19,
    "mdrd": 309.641,
    "hos_guid": null
  },
  {
    "vn": "630803103046",
    "bw": null,
    "creatinine": 0.6,
    "ckd_epi": 152.031,
    "egfr": 227.647,
    "mdrd": 187.465,
    "hos_guid": null
  },
  {
    "vn": "630928080002",
    "bw": null,
    "creatinine": 0.6,
    "ckd_epi": 147.819,
    "egfr": 206.469,
    "mdrd": 177.529,
    "hos_guid": null
  },
  {
    "vn": "630928080004",
    "bw": null,
    "creatinine": 0.7,
    "ckd_epi": 137.773,
    "egfr": 177.438,
    "mdrd": 146.884,
    "hos_guid": null
  },
  {
    "vn": "630928080006",
    "bw": null,
    "creatinine": 0.4,
    "ckd_epi": 177.094,
    "egfr": 304.766,
    "mdrd": 290.746,
    "hos_guid": null
  }
]
```
