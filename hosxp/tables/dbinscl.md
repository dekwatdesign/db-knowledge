# `dbinscl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| INSCL | varchar(3) | YES |  | NULL |  |  |
| INSCL_NAME | varchar(100) | YES |  | NULL |  |  |
| INSCL_DATEEXP | varchar(80) | YES |  | NULL |  |  |
| MAININSC | varchar(5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "INSCL": "01",
    "INSCL_NAME": "สิทธิประกันสังคม",
    "INSCL_DATEEXP": null,
    "MAININSC": "SSS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "INSCL": "02",
    "INSCL_NAME": "สิทธิข้าราชการ/สิทธิรัฐวิสาหกิจ",
    "INSCL_DATEEXP": null,
    "MAININSC": "OFC",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "INSCL": "03",
    "INSCL_NAME": "สถานะคนไทยในต่างประเทศ",
    "INSCL_DATEEXP": null,
    "MAININSC": "FRG",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "INSCL": "04",
    "INSCL_NAME": "สิทธิประกันสังคมและสิทธิข้าราชการ/สิทธิรัฐวิสาหกิจ",
    "INSCL_DATEEXP": null,
    "MAININSC": "SOF",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "INSCL": "05",
    "INSCL_NAME": "สิทธิข้าราชการการเมือง/นักการเมือง",
    "INSCL_DATEEXP": null,
    "MAININSC": "BFC",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "INSCL": "06",
    "INSCL_NAME": "ไม่มีสิทธิใดๆ",
    "INSCL_DATEEXP": null,
    "MAININSC": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "INSCL": "07",
    "INSCL_NAME": "สถานะคนต่างด้าว",
    "INSCL_DATEEXP": null,
    "MAININSC": "NRD",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "INSCL": "08",
    "INSCL_NAME": "สิทธิครูเอกชน/สิทธิข้าราชการการเมือง",
    "INSCL_DATEEXP": null,
    "MAININSC": "PBF",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
