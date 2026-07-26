# `rpt_506ds_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rpt_506ds_code | varchar(10) | NO | PRI |  |  |  |
| rpt_506ds_name | varchar(200) | YES |  | NULL |  |  |
| code_index | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rpt_506ds_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rpt_506ds_code": "A1001",
    "rpt_506ds_name": "รพ.สต. / PCU",
    "code_index": null
  },
  {
    "rpt_506ds_code": "A1002",
    "rpt_506ds_name": "รพศ. / รพท.",
    "code_index": null
  },
  {
    "rpt_506ds_code": "A1003",
    "rpt_506ds_name": "รพ.จิตเวช",
    "code_index": null
  },
  {
    "rpt_506ds_code": "A1004",
    "rpt_506ds_name": "รพช.",
    "code_index": null
  },
  {
    "rpt_506ds_code": "A1005",
    "rpt_506ds_name": "อื่นๆ",
    "code_index": null
  },
  {
    "rpt_506ds_code": "A2001",
    "rpt_506ds_name": "ผู้ป่วยเอง",
    "code_index": 1
  },
  {
    "rpt_506ds_code": "A2002",
    "rpt_506ds_name": "ญาติ / คนใกล้ชิด",
    "code_index": 2
  },
  {
    "rpt_506ds_code": "A2003",
    "rpt_506ds_name": "ผู้ให้บริการ",
    "code_index": 3
  }
]
```
