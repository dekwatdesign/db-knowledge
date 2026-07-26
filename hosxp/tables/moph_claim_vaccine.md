# `moph_claim_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_vaccine_code | varchar(10) | NO | PRI |  |  |  |
| remark | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | moph_vaccine_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "moph_vaccine_code": "HPVC21",
    "remark": null
  },
  {
    "moph_vaccine_code": "HPVC22",
    "remark": null
  },
  {
    "moph_vaccine_code": "HPVC23",
    "remark": null
  },
  {
    "moph_vaccine_code": "HPVV21",
    "remark": null
  },
  {
    "moph_vaccine_code": "HPVV22",
    "remark": null
  },
  {
    "moph_vaccine_code": "HPVV23",
    "remark": null
  },
  {
    "moph_vaccine_code": "HPVG41",
    "remark": null
  },
  {
    "moph_vaccine_code": "HPVG42",
    "remark": null
  }
]
```
