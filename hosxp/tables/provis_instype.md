# `provis_instype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| pttype_std_code | char(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "สิทธิประกันสังคม",
    "hos_guid": null,
    "pttype_std_code": "4200"
  },
  {
    "code": "02",
    "name": "สิทธิข้าราชการ/สิทธิรัฐวิสาหกิจ",
    "hos_guid": null,
    "pttype_std_code": "1100"
  },
  {
    "code": "03",
    "name": "สถานะคนไทยในต่างประเทศ",
    "hos_guid": null,
    "pttype_std_code": "9100"
  },
  {
    "code": "04",
    "name": "สิทธิประกันสังคมและสิทธิข้าราชการ/สิทธิรัฐวิสาหกิจ",
    "hos_guid": null,
    "pttype_std_code": "4200"
  },
  {
    "code": "05",
    "name": "สิทธิข้าราชการการเมือง/นักการเมือง",
    "hos_guid": null,
    "pttype_std_code": "1900"
  },
  {
    "code": "06",
    "name": "ไม่มีสิทธิใดๆ",
    "hos_guid": null,
    "pttype_std_code": "9100"
  },
  {
    "code": "07",
    "name": "สถานะคนต่างด้าว",
    "hos_guid": null,
    "pttype_std_code": "8400"
  },
  {
    "code": "08",
    "name": "สิทธิครูเอกชน/สิทธิข้าราชการการเมือง",
    "hos_guid": null,
    "pttype_std_code": "4200"
  }
]
```
