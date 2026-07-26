# `pttype_eclaim`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(2) | NO | PRI | NULL |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| ar_opd | varchar(50) | YES |  | NULL |  |  |
| ar_ipd | varchar(50) | YES |  | NULL |  |  |
| income_opd | varchar(50) | YES |  | NULL |  |  |
| income_ipd | varchar(50) | YES |  | NULL |  |  |
| up_opd | varchar(50) | YES |  | NULL |  |  |
| up_ipd | varchar(50) | YES |  | NULL |  |  |
| down_opd | varchar(50) | YES |  | NULL |  |  |
| down_ipd | varchar(50) | YES |  | NULL |  |  |
| gf_opd | varchar(50) | YES |  | NULL |  |  |
| gf_ipd | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "UC ใน CUP",
    "ar_opd": "1102050194.201",
    "ar_ipd": "1102050194.202",
    "income_opd": "4301020105.201",
    "income_ipd": "4301020105.202",
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  },
  {
    "code": "02",
    "name": "UC ใน CUP ร่วมจ่าย 30 บาท",
    "ar_opd": null,
    "ar_ipd": null,
    "income_opd": null,
    "income_ipd": null,
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  },
  {
    "code": "03",
    "name": "UC-AE",
    "ar_opd": "1102050194.207",
    "ar_ipd": "1102050194.208",
    "income_opd": "4301020105.244",
    "income_ipd": "4301020105.245",
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  },
  {
    "code": "04",
    "name": "UC-HC",
    "ar_opd": "1102050194.209",
    "ar_ipd": "1102050194.210",
    "income_opd": "4301020105.246",
    "income_ipd": "4301020105.247",
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  },
  {
    "code": "05",
    "name": "UC-DMI",
    "ar_opd": "1102050194.211",
    "ar_ipd": "1102050194.212",
    "income_opd": "4301020105.248",
    "income_ipd": "4301020105.249",
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  },
  {
    "code": "06",
    "name": "UC-PP Expressed demand สร้างเสริมสุขภาพและป้องกันโรค",
    "ar_opd": "1102050194.203",
    "ar_ipd": "",
    "income_opd": "4301020105.241",
    "income_ipd": "",
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  },
  {
    "code": "07",
    "name": "UC นอก CUP ในจังหวัด",
    "ar_opd": "1102050194.204",
    "ar_ipd": "1102050194.202",
    "income_opd": "4301020105.203",
    "income_ipd": "4301020105.202",
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  },
  {
    "code": "08",
    "name": "UC นอก CUP ต่างจังหวัด",
    "ar_opd": "1102050194.205",
    "ar_ipd": "1102050194.202",
    "income_opd": "4301020105.205",
    "income_ipd": "4301020105.202",
    "up_opd": null,
    "up_ipd": null,
    "down_opd": null,
    "down_ipd": null,
    "gf_opd": null,
    "gf_ipd": null
  }
]
```
